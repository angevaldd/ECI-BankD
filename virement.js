// Validation du formulaire de virement
document.getElementById('transfer-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
  
    var fromAccount = document.getElementById('fromAccount').value;
    var toAccount = document.getElementById('toAccount').value;
    var amount = document.getElementById('amount').value;
  
    // Effectuer des validations supplémentaires si nécessaire
  
    // Envoyer les données au serveur via une requête AJAX ou un formulaire traditionnel
    // Le code JavaScript pour l'envoi des données dépendra de la configuration de votre serveur et de vos besoins spécifiques
  });
  