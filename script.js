// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Empêche l'envoi réel
      confirmation.textContent = "Merci pour votre message ! Nous vous répondrons bientôt.";
      confirmation.style.display = "block";
      form.reset(); // Réinitialise les champs
    });
  });
  