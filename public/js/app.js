// Load JSON data and return the text for a given key
export async function getTextOrImage(key, filename) {
  try {
    //const response = await fetch('data/' + filename + '.json'); // Load the JSON file
    const response = await fetch(`JSON/${filename}.json`); // Load the JSON file
    const data = await response.json();
    console.log("Loaded JSON data:", data); // Debug: JSON-Inhalt anzeigen
    return data[key] || "Text not found: " + key;
  } catch (error) {
    console.error("Error loading JSON:", error);
    return "Error loading text";
  }
}
