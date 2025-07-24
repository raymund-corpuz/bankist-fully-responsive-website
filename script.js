// 'use strict';

import { tabData } from './data.js';
import { testimonialData } from './testimonial.js';

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
const testimonialTitle = document.querySelector('.testimonial-container-title');
const testimonialContent = document.querySelector(
  '.testimonial-container-content'
);
const avatar = document.querySelector('.avatar');
const userName = document.querySelector('.user-name');
const location = document.querySelector('.location');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let current = 0;

instantTransfer.addEventListener('click', () => getTabData(0));
instantLoad.addEventListener('click', () => getTabData(1));
instantClosing.addEventListener('click', () => getTabData(2));
leftArrow.addEventListener('click', leftTestimonial);
rightArrow.addEventListener('click', rightTestimonial);

function getTabData(id) {
  const tabMainTitle = document.querySelector('.content-main-title');
  const tabMainContent = document.querySelector('.content-main-content');
  tabMainTitle.textContent = tabData[id].title;
  tabMainContent.textContent = tabData[id].content;
}

function getTestimonialData(id) {
  testimonialTitle.textContent = testimonialData[id].title;
  testimonialContent.textContent = testimonialData[id].testimonial;
  avatar.src = testimonialData[id].avatar;
  userName.textContent = testimonialData[id].name;
  location.textContent = testimonialData[id].location;
}

function leftTestimonial() {
  --current;
  if (current < 0) {
    current = testimonialData.length - 1;
  }
  getTestimonialData(current);
}

function rightTestimonial() {
  ++current;
  if (current > testimonialData.length - 1) {
    current = 0;
  }
  getTestimonialData(current);
}

getTabData(0);
getTestimonialData(0);
