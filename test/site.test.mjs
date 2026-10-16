import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, basename, dirname } from 'node:path';

const read = name => readFileSync(name, 'utf8');
const pages = ['index.html', 'Audit.html', 'thanks.html'];

test('all public pages identify the synthetic boundary without operational claims', () => {
  for (const page of pages) {
    const html = read(page);
    assert.match(html, /SYNTHETIC DEMONSTRATION/);
    assert.match(html, /No live bank verification, payments, ERP writes or real human authentication/);
    assert.doesNotMatch(html, /ps_live_|api\.payeeshield|ISO 27001|PayPal LIVE|Payment Confirmed|Gatepass Activated|No data leaves|Enterprise SLA|Trust Score: 92/i);
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.match(html, /aria-label="Primary navigation"/);
    assert.match(html, /href="#main"/);
  }
});

test('thank-you URL grants no payment status or invented entitlement', () => {
  const html = read('thanks.html');
  assert.match(html, /Payment status is not verified here/);
  assert.match(html, /token or PayerID, are not payment verification/);
  assert.match(html, /No service has been activated by this page/);
  assert.doesNotMatch(html, /<script|<form|onclick|download=|URLSearchParams|Math\.random|apiKey/i);
});

test('enquiry explains mailto disclosure, labels fields and uses confirmed contact', () => {
  const html = read('Audit.html');
  assert.match(html, /Submitting this mailto form opens your email application and may send the supplied information/);
  assert.match(html, /recipient and email providers/);
  assert.match(html, /action="mailto:gareth@agenttrustgate\.com\?subject=/);
  for (const id of ['reply-email', 'organisation', 'scenario-note', 'consent']) {
    assert.ok(html.includes(`for="${id}"`)); assert.ok(html.includes(`id="${id}"`));
  }
});

test('local links, fragment targets and assets resolve with exact filename case', () => {
  for (const page of pages) {
    const html = read(page);
    for (const [, target] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(?:https?:|mailto:)/.test(target)) continue;
      const [file, fragment] = target.split('#');
      const destination = resolve(file || page);
      assert.ok(existsSync(destination), `${page}: ${target}`);
      assert.ok(readdirSync(dirname(destination)).includes(basename(destination)), `${page}: case-sensitive ${target}`);
      if (fragment) assert.ok(readFileSync(destination, 'utf8').includes(`id="${fragment}"`), `${page}: ${target}`);
    }
  }
});

test('runtime contains only fictional text selection with no network, storage or payment path', () => {
  const script = read('site.js');
  assert.match(script, /Predetermined fictional examples/);
  assert.doesNotMatch(script, /fetch\s*\(|XMLHttpRequest|WebSocket|localStorage|sessionStorage|location\.search|URLSearchParams|paypal/i);
  assert.match(read('site.css'), /:focus-visible/);
  assert.match(read('site.css'), /prefers-reduced-motion/);
});

test('deployment selects all corrected pages and local assets without broadening its triggers', () => {
  const workflow = read('.github/workflows/deploy.yml');
  assert.match(workflow, /branches: \[main\]/);
  assert.match(workflow, /workflow_dispatch:/);
  assert.doesNotMatch(workflow, /pull_request|branches: \['?\*|cp -R \./);
  assert.match(workflow, /cp index\.html Audit\.html thanks\.html site\.css site\.js _site\//);
});
