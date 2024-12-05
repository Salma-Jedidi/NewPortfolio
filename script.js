function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}
// script.js
var part,
  i = 0,
  offset = 0,
  forwards = true,
  skip_count = 0,
  skip_delay = 5,
  speed = 100,
  words = []; // Initialisé vide

var wordflick = function (id) {
  // Initialiser les mots selon l'ID
  if (id === "english") {
    words = ['Hi, I\'m Jedidi Salma!', 'I love coding!', 'Welcome to my portfolio'];
  } else if (id === "french") {
    words = ['Bonjour, Je suis Jedidi Salma!', 'Bienvenue sur mon portfolio', 'J\'adore coder.'];
  }

  // Réinitialiser les variables nécessaires
  i = 0;
  offset = 0;
  forwards = true;
  skip_count = 0;

  // Nettoyer le texte initial
  $('h1.word').text("");

  // Animation
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= words.length) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $('h1.word').text(part);
  }, speed);
};

$(document).ready(function () {
  // Vérifier l'ID de l'élément et appeler wordflick avec l'ID approprié
  if ($('#english').length > 0) {
    wordflick("english");
  } else if ($('#french').length > 0) {
    wordflick("french");
  }
});


// Target elements
document.addEventListener('DOMContentLoaded', () => {
  const typewriter = document.getElementById('typewriter');
  const image = document.getElementById('image');

  const textContent = "À la recherche des opportunités en développement web, science de données ou intelligence artificielle.";
  const words = textContent.split(' ');
  let wordIndex = 0;
  let typingEffect = null;
  let isTextVisible = true; // Indicateur pour alterner entre texte et image

  // Fonction pour afficher le texte avec l'effet "typewriter"
  function typeText() {
    typewriter.textContent = ""; // Effacer le contenu précédent
    wordIndex = 0; // Réinitialiser l'index des mots
    typewriter.style.display = 'block'; // Afficher le texte
    image.style.display = 'none'; // Masquer l'image
    image.style.opacity = 0; // Réinitialiser l'opacité

    typingEffect = setInterval(() => {
      if (wordIndex < words.length) {
        typewriter.textContent = words.slice(0, wordIndex + 1).join(' ');
        wordIndex++;
      } else {
        clearInterval(typingEffect); // Arrêter l'effet lorsque tout le texte est affiché
        typingEffect = null;
      }
    }, 600); // Vitesse de l'animation (600 ms entre chaque mot)
  }

  // Fonction pour afficher l'image avec une transition
  function showImage() {
    typewriter.style.display = 'none'; // Masquer le texte
    image.style.display = 'block'; // Afficher l'image
    setTimeout(() => {
      image.style.opacity = 1; // Effet d'apparition progressive
    }, 10); // Léger délai pour garantir que l'image est visible avant la transition
  }

  // Fonction pour alterner entre le texte et l'image
  function toggleDisplay() {
    if (isTextVisible) {
      typeText();
    } else {
      showImage();
    }
    isTextVisible = !isTextVisible; // Alterner l'état
  }

  // Démarrer l'animation et configurer l'intervalle d'alternance
  toggleDisplay(); // Commencer par le texte
  setInterval(toggleDisplay, 20000); // Alterner toutes les 20 secondes
});

function navigateTo(page) {
  window.location.href = page;
}