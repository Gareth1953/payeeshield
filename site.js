'use strict';
// Predetermined fictional examples, not verification or executable authority.
const selector = document.getElementById('scenario');
const result = document.getElementById('result');
const examples = {
  bound: 'Illustrative allowed path: the fictional request matches its fixture. This browser illustration issues no signed authority and changes no supplier record.',
  changed: 'Illustrative refusal: the fictional account ending differs from the approved fixture. No bank check, security notification or real block has occurred.',
  unknown: 'Illustrative UNKNOWN: an acknowledgement was lost. Do not infer success or retry a real write. This page has no destination record or reconciliation service. The separate ATG local source demo can illustrate same-process reconciliation.'
};
if (selector && result) selector.addEventListener('change', () => { result.textContent = examples[selector.value]; });
