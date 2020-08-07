'use strict'

const B1 = document.getElementById('B1');
const B2 = document.getElementById('B2');
const B3 = document.getElementById('B3');
const resetB = document.getElementById('resetB');

const S1 = document.getElementById('S1');
const S2 = document.getElementById('S2');
const resetS = document.getElementById('resetS');

const O1 = document.getElementById('O1');
const O2 = document.getElementById('O2');
const resetO = document.getElementById('resetO');

B1.addEventListener('click', () => {
  B1.classList.toggle('onB');
});
B2.addEventListener('click', () => {
  B2.classList.toggle('onB');
});
B3.addEventListener('click', () => {
  B3.classList.toggle('onB');
});
resetB.addEventListener('click', () => {
  B1.classList.toggle('onB');
  B2.classList.toggle('onB');
  B3.classList.toggle('onB');
});

S1.addEventListener('click', () => {
  S1.classList.toggle('onS');
});
S2.addEventListener('click', () => {
  S2.classList.toggle('onS');
});
resetS.addEventListener('click', () => {
  S1.classList.toggle('onS');
  S2.classList.toggle('onS');
});

O1.addEventListener('click', () => {
  O1.classList.toggle('onO');
});
O2.addEventListener('click', () => {
  O2.classList.toggle('onO');
});
resetO.addEventListener('click', () => {
  O1.classList.toggle('onO');
  O2.classList.toggle('onO');
});
