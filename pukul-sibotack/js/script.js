const panci = document.querySelectorAll('.panci');
const botak = document.querySelectorAll('.botak');
const papanSkor = document.querySelector('.papan-skor');
const pop = document.querySelector('#pop');

let panciSebelumnya;
let selesai;
let skor;

function randomPanci(panci) {
  const t = Math.floor(Math.random() * panci.length);
  const tRandom = panci[t];
  if (tRandom == panciSebelumnya) {
    randomPanci(panci);
  }
  panciSebelumnya = tRandom;
  return tRandom;
}

function randomWaktu(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function munculkanBotak() {
  const tRandom = randomPanci(panci);
  const wRandom = randomWaktu(300, 1000);
  tRandom.classList.add('muncul');

  setTimeout(() => {
    tRandom.classList.remove('muncul');
    if (!selesai) {
      munculkanBotak();
    }
  }, wRandom);
}

function mulai() {
  selesai = false;
  skor = 0;
  papanSkor.textContent = 0;
  munculkanBotak();
  setTimeout(() => {
    selesai = true;
  }, 10000);
}

function pukul() {
  skor++;
  this.parentNode.classList.remove('muncul');
  pop.play();
  papanSkor.textContent = skor;
}

botak.forEach(t => {
  t.addEventListener('click', pukul);
});