'use strict';

/* import { gsap } from 'gsap'; 

import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);  */

document.addEventListener('DOMContentLoaded', function() {
    const voirPlusBtn = document.getElementById('voir-plus-btn');
    const textContainer = document.querySelector('.text-container');
    let isOpen = false;

    if (voirPlusBtn){
        voirPlusBtn.addEventListener('click', function(e) {
        e.preventDefault();
 
        if (!textContainer);

        if (isOpen) {
            // Masquer le texte
            textContainer.style.maxHeight = '380px'; // hauteur fermée
            voirPlusBtn.textContent = 'Voir plus';
        } else {
            textContainer.style.maxHeight = '600px';
            voirPlusBtn.textContent = 'Voir moins';
        }

        isOpen = !isOpen;
    });
    }
 
}); 


//ANIMATION SCROLL
 
/* 
const txtAnim = document.querySelectorAll('.section__animate--el'); 

txtAnim.forEach(element => {
  gsap.from( txtAnim, {
	scrollTrigger: {
    trigger: '.section__animate', 
    start: 'top 80%', 
    toggleActions: "restart reset restart reset", 
  }, 
  x: -70, 
  opacity: 0,
  stagger: 0.3,
  duration: 0.7,
  ease: "power2.out"
});
});
 */
