/*   
  document.addEventListener('DOMContentLoaded', function () {
    const translateLink = document.getElementById('translateLink');
    const frenchText = document.getElementById('frenchText');
    const englishText = document.getElementById('englishText');
  
    translateLink.addEventListener('click', function (event) {
        event.preventDefault();
        frenchText.classList.toggle('hidden'); 
        englishText.classList.toggle('hidden'); 
    });
  });
   */
  function navigateTo(page) {
    window.location.href = page;
  }