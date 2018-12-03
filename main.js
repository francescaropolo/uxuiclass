'use strict'

var button = document.querySelector('.contact-button');
var form = document.querySelector('form');
button.addEventListener('click', () => {
  form.classList.add('visible')
})