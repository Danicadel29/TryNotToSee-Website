'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const voirPlusBtn = document.getElementById('voir-plus-btn');
    const textContainer = document.querySelector('.text-container');
    let isOpen = false;

    if (voirPlusBtn){
        voirPlusBtn.addEventListener('click', function(e) {
        e.preventDefault();
 
        if (!textContainer) return;

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
