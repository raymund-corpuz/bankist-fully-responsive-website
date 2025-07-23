// 'use strict';

import { tabData } from './data.js';

///////////////////////////////////////
// Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

// tabbed components

const instantTransfer = document.querySelector('.instant-transfer');
const instantLoad = document.querySelector('.instant-load');
const instantClosing = document.querySelector('.instant-closing');

instantTransfer.addEventListener('click', () => getTabData(0));
instantLoad.addEventListener('click', () => getTabData(1));
instantClosing.addEventListener('click', () => getTabData(2));

function getTabData(id) {
  const tabMainTitle = document.querySelector('.content-main-title');
  const tabMainContent = document.querySelector('.content-main-content');
  tabMainTitle.textContent = tabData[id].title;
  tabMainContent.textContent = tabData[id].content;
}

getTabData(0);
