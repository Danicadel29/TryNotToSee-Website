'use strict';

import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
gsap.registerPlugin(ScrollTrigger);  

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

document.querySelectorAll('.section__animate').forEach(section => { //selection de toute les class
// je t'aimis des commentaires pour qu'est ce qui fait quoi :) 
 gsap.from(section.querySelectorAll('.section__animate--el'), {
  scrollTrigger: {
    trigger: section, // çac'est ton déclencheur (tu peux check aussi en activant markers)
    start: 'top 90%', 
    /* markers: false, */ // tu peux décommenter si tu veux debug ton anim ça te permettra de checker ton start stvque ça commence à 30% par ex
    toggleActions: "restart ", // pas vraiment besoin de modif ça sauf si tu veux changer d'anim 
  },
  x: -70, // pas vraiment besoin de changer vu que tu pars de l'opacité 0 
  opacity: 0, // l'effet sort de nul part
  stagger: 0.4, // le delais entre les section__animate--el 
  duration: 0.5,
  ease: "power2.out"
});
})


// tu peux garder la même logique pour les autres animations et sinon tient voila la doc ou alors tu me demandes et je regarde^^
// https://gsap.com/docs/v3/GSAP/gsap.effects