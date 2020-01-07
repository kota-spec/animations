import { makeArray } from './_make-array';

const $$button = document.getElementById('js-button');
const $$images = makeArray(document.querySelectorAll('.js-image'));

$$button.addEventListener('click', () => {
  $$images.forEach(el => {
    el.classList.add('display');
  });
});
