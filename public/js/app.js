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
  const titleText = document.getElementById('title-text');
  const descriptionText = document.getElementById('description-text');

  // Add click event listener to each card
  cards.forEach(card => {
    card.addEventListener('click', () => {
      //TODO: Give each card an ID
      //TODO: EXtract JSON file description, id, Title (?)
      //TODO: change static description to one for each card ID corresponding to the same id in JSON file
          // Check if the div is already visible
      const cardId = card.dataset.cardId; // get the clicked card's ID
      const isVisible = !descriptionDisplay.classList.contains('hidden');
          // If the clicked card's content is already displayed, hide it
    if (isVisible && descriptionDisplay.dataset.activeCard === card.dataset.cardId) {
      descriptionDisplay.classList.add('hidden'); // Hide the description display
      descriptionDisplay.dataset.activeCard = ""; // Clear active card reference
    } else {
      //const description = card.getAttribute('data-description');
      const title = "Fotodruck";
      const description = "Dieser Fotodruck befindet sich neben den Treppen, die vom Forumsplatz hoch zum Eingang der Universitätsbibliothek führen. Er zeigt die Galaxie NGC 2336 und wurde von der Fakultät für Physik und Astronomie angebracht.";
      descriptionText.textContent = description;
      titleText.textContent = title;

      descriptionDisplay.classList.remove('hidden'); // Show the description display
      descriptionDisplay.dataset.activeCard = card.dataset.cardId; // Set active card reference
    }
      
    });
  });
