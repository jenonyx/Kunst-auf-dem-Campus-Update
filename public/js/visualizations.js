import { getTextOrImage } from './app.js';
// Select all buttons in the accordion
//VISUALIZAtIONS - Page
/*const accordionButtons = document.querySelectorAll("#accordion .btn-link");

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
});*/

// Load JSON data and return the text for a given key

const allTextBoxes = document.querySelectorAll('.p-data-visualizations-text');

(async () => {
  for (let currNum = 1; currNum <= allTextBoxes.length; currNum++) {
    try {
      let textKey = `data-visualization-text-${currNum}`;
      console.log(textKey);
      const description = await getTextOrImage(textKey, 'data_visualizations');
      allTextBoxes[currNum - 1].textContent = description;
    } catch (error) {
      console.error('Error loading JSON:', error);
    }
  }
})();
