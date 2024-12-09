      // Select all buttons in the accordion
      const accordionButtons = document.querySelectorAll(
        "#accordion .btn-link"
      );

      // Add click event listener to each button
      accordionButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          // Prevent default behavior
          event.preventDefault();

          // Get the associated collapsible content
          const targetId = button.getAttribute("data-target");
          const content = document.querySelector(targetId);

          // Close all other collapsible elements
          document.querySelectorAll("#accordion .collapse").forEach((item) => {
            if (item !== content) {
              item.classList.remove("show");
            }
          });

          // Toggle the 'show' class for the clicked element
          content.classList.toggle("show");
        });
      });


        // Select all clickable cards
  const cards = document.querySelectorAll('.card.clickable');
  
  // Description display div
  const descriptionDisplay = document.getElementById('description-display');
  const descriptionText = document.getElementById('description-text');

  // Add click event listener to each card
  cards.forEach(card => {
    card.addEventListener('click', () => {
      //const description = card.getAttribute('data-description');
      const description = "Dieser Fotodruck befindet sich neben den Treppen, die vom Forumsplatz hoch zum Eingang der Universitätsbibliothek führen. Er zeigt die Galaxie NGC 2336 und wurde von der Fakultät für Physik und Astronomie angebracht.";
      descriptionText.textContent = description;
      
    });
  });
