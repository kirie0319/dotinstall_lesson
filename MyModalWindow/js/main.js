'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  
  open.addEventListener('click', () => {
    mask.classList.remove('hide');
    modal.classList.remove('hide');
  });

  close.addEventListener('click', () => {
    mask.classList.add('hide');
    modal.classList.add('hide');
  });

  mask.addEventListener('click', () => {
    close.click();
  });
}