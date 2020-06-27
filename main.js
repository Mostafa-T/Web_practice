 /*
// Navigation menu

let burgerMenu = document.querySelector('.burger');

  burgerMenu.addEventListener('click', function() {
    //HTML elements 
    let firstMenu = document.querySelector('.first-menu');
    let middleMenu = document.querySelector('.second-menu');
    let thirdMenu = document.querySelector('.third-menu');
    let sideBarMenu = document.querySelector('.side-bar');

    //burger classes active
    firstMenu.classList.toggle('first-menu-active');
    middleMenu.classList.toggle('second-menu-active');
    thirdMenu.classList.toggle('third-menu-active');

    //side bar active
    sideBarMenu.classList.toggle('side-bar-acive');
  });
  */

  // Practice 
  /*
      //declaring variables from HTML
  var firstPargraph = document.querySelector('p'),
      btn = document.querySelector('button');

      //creating on click function
      btn.addEventListener('click', function(){
        
        //check if the content inside the buttom is named as a class in the pargraph
        if(firstPargraph.classList.contains(btn.innerText)) {
          document.write('I did it bitches !!!!');
        }
      }) */
      

      /*
          Preload function
      */

      window.onload = function(){
        'use strict';
        //declaring the preload div from the HTML file
        let preLoad = document.querySelector('.preload');
        
        // when the page finsh the load it removes the class of the preload
        preLoad.classList.remove('preload');
      };

      /*
        scroll top function
      */

      //declaring variables for the HTML elements
      /*
      let scrollBtn = document.querySelector('.scroll-top span');

      scrollBtn.addEventListener('click', function () {

          'use strict';

          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;


      });
      */

      /*
      scroll animation funcotion
      */


      const animationPosition = window.scrollY;
      let myDiv = document.querySelector('.svg-animation-1 img');
      let mySpan = document.querySelector('.svg-animation-1 span');

      window.addEventListener('scroll', animatedScroll);

      function animatedScroll () {

        if(document.documentElement.scrollTop >= 300) {
          myDiv.style.transform = "translateX(-90px) rotate(45deg)";
          mySpan.style.visibility = "visible";
          mySpan.style.opacity = "1";
          mySpan.style.transform = "translateX(-50px) rotate(0)";
        }
      }