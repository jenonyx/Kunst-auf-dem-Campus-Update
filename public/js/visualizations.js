import { getTextOrImage } from './app.js';

// Select all buttons in the accordion
const accordionButtons = document.querySelectorAll("#accordion .btn-link");

// Add click event listener to each button
accordionButtons.forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();

    // Get the associated collapsible content
    const targetId = button.getAttribute("data-target");
    const content = document.querySelector(targetId);

    // Toggle the 'show' class for the clicked element
    const isNowVisible = content.classList.toggle("show");

    // Find the card number
    const itemNum = content.getAttribute("data-card-number");

    // Select the corresponding text box
    const textBoxSelected = document.querySelector(
      `.p-data-visualizations-text[data-visualizations-id="${itemNum}"]`
    );

    if (!textBoxSelected) {
      console.warn(`No text box found for visualization ID ${itemNum}`);
      return;
    }

    if (isNowVisible) {
      // Fetch and display the text when the card body is shown
      const textKey = `data-visualization-text-${itemNum}`;
      try {
        const description = await getTextOrImage(textKey, 'data_visualizations');
        textBoxSelected.textContent = description;
      } catch (error) {
        console.error("Error fetching data visualization text:", error);
      }
    } else {
      // Clear the text when the card body is collapsed
      textBoxSelected.textContent = '';
    }

    // Ensure all other collapsible elements are closed
    document.querySelectorAll("#accordion .collapse").forEach((item) => {
      if (item !== content && item.classList.contains("show")) {
        item.classList.remove("show");

        // Clear text for collapsed elements
        const otherItemNum = item.getAttribute("data-card-number");
        const otherTextBox = document.querySelector(
          `.p-data-visualizations-text[data-visualizations-id="${otherItemNum}"]`
        );
        if (otherTextBox) {
          otherTextBox.textContent = '';
        }
      }
    });
  });
});
