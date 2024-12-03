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

