'use strict';

{
  (function() {
    window.addEventListener('DOMContentLoaded', function() {
      let stalkerElem = document.getElementById('l_eye');
      let scrollingElem = document.scrollingElement||document.documentElement||document.body;
      scrollingElem.addEventListener('mousemove', function(e) {
        let w_l_height = document.documentElement.clientWidth;
        let w_l_width = document.documentElement.clientHeight;
        let position_l_h = w_l_height / 2;
        let position_l_w = w_l_width / 2;
        let mouseX = e.clientX - position_l_h;
        let mouseY = e.clientY - position_l_w;
        if (mouseY > 100) {
          mouseY = 100;
        } else if (mouseY < 0) {
          mouseY = 0;
        }
        if (mouseX > 100) {
          mouseX = 100;
        } else if (mouseX < 0) {
          mouseX = 0;
        }
        stalkerElem.style.top = mouseY + 'px';
        stalkerElem.style.left = mouseX + 'px';
      });
    });
  })();

  (function() {
    window.addEventListener('DOMContentLoaded', function() {
      let stalker = document.getElementById('r_eye');
      let scrolling = document.scrollingElement||document.documentElement||document.body;
      scrolling.addEventListener('mousemove', function(e) {
        let w_height = document.documentElement.clientWidth;
        let w_width = document.documentElement.clientHeight;
        let position_h = w_height / 2;
        let position_w = w_width / 2;
        let mousex = e.clientX - position_h;
        let mousey = e.clientY - position_w;
        if (mousey > 100) {
          mousey = 100;
        } else if (mousey < 0) {
          mousey = 0;
        }
        if (mousex > 100) {
          mousex = 100;
        } else if (mousex < 0) {
          mousex = 0;
        }
        stalker.style.top = mousey + 'px';
        stalker.style.left = mousex + 'px';
      });
    });
  })();
}