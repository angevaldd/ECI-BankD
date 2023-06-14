// Recherche d'informations
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
  
    var query = document.getElementById('query').value;
  
    // Effectuer des validations supplémentaires si nécessaire
  
    // Envoyer les données au serveur via une requête AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'recherche.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send('query=' + encodeURIComponent(query));
  });
  