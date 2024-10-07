'use strict';
const allSections = document.querySelectorAll('.section');
const allSectionNum = document.querySelectorAll('.section__number');

window.addEventListener('scroll', function (e) {
  [...allSections].forEach((el, index, _) => {
    if (el.getBoundingClientRect().y < 600) {
      el.classList.add('active');
      this.setTimeout(function () {
        [...allSectionNum][index].textContent = `${(index + 1)
          .toString()
          .padStart(2, 0)}`;
        [...allSectionNum][index].classList.add('active');
      }, 800);
    } else if (el.getBoundingClientRect().y > 600) {
      el.classList.remove('active');
      [...allSectionNum][index].classList.remove('active');
    }
  });
});
