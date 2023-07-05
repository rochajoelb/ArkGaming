//este ficheiro é só utilizado para ler


const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "emails.json");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("Raw file data:", data); // Log the raw data to see if it's empty or contains unexpected content
    console.log("Parsed file data:", JSON.parse(data)); // Attempt to parse the data as JSON and log it
  }
});
