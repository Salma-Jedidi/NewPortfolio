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
  
  

  
  document.addEventListener('DOMContentLoaded', () => {
    const typewriterEn = document.getElementById('typewriterEn');
    const imageEn = document.getElementById('imageEn');
  
    const textContentEN = "Looking for opportunities in web development, data science, or artificial intelligence.";
    const wordsEN = textContentEN.split(' ');
    let wordIndexEN = 0;
    let typingEffectEN = null;
    let isTextVisible = true; // Flag to alternate between text and image
  
    // Fonction pour afficher le texte avec un effet "typewriter"
    function typeTextEN() {
      typewriterEn.textContent = ""; // Clear previous text
      wordIndexEN = 0; 
      typewriterEn.style.display = 'block'; // Show text
      imageEn.style.display = 'none'; // Hide image
      imageEn.style.opacity = 0; // Reset opacity
  
      typingEffectEN = setInterval(() => {
        if (wordIndexEN < wordsEN.length) {
          typewriterEn.textContent = wordsEN.slice(0, wordIndexEN + 1).join(' ');
          wordIndexEN++;
        } else {
          clearInterval(typingEffectEN);
          typingEffectEN = null;
        }
      }, 600); // Typewriter speed
    }
  
    // Fonction pour afficher l'image
    function showImageEN() {
      typewriterEn.style.display = 'none'; // Hide text
      imageEn.style.display = 'block'; // Show image
      setTimeout(() => {
        imageEn.style.opacity = 1; // Fade-in effect
      }, 10);
    }
  
    // Fonction pour alterner entre le texte et l'image
    function toggleDisplay() {
      if (isTextVisible) {
        typeTextEN();
      } else {
        showImageEN();
      }
      isTextVisible = !isTextVisible; // Toggle the flag
    }
  
    // Initial call and interval for alternating display
    toggleDisplay(); // Start with text
    setInterval(toggleDisplay, 20000); // Switch every 20 seconds
  });
  
  
