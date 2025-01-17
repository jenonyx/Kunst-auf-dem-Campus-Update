const pins = document.querySelectorAll(".map-pin");
let activePin = null;

pins.forEach((pin) => {
  pin.addEventListener("click", async (e) => {
    // Remove 'active' class from the previous active pin
    if (activePin) {
      activePin.classList.remove("active");
    }

    // Add 'active' class to the clicked pin
    activePin = e.target;
    activePin.classList.add("active");

    // Update the info box with the story content
    const path = activePin.getAttribute("data-path");
    const infoBox = document.getElementById("info-box");

    try {
      // Fetch the EJS-rendered content from the server
      const response = await fetch(`stories/${path}`);
      if (response.ok) {
        const content = await response.text();
        infoBox.innerHTML = content;
        // Scroll to the info box
        infoBox.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        infoBox.innerHTML = `<p>Error loading content for ${path}</p>`;
      }
    } catch (error) {
      infoBox.innerHTML = `<p>Failed to load story: ${error.message}</p>`;
    }
  });
});