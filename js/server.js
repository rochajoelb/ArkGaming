const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.post("/store-email", (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const data = { email: email };
  const jsonData = JSON.stringify(data);
  
  const filePath = path.join(__dirname, "emails.json");
  
  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).json({ error: "Error storing email" });
    }

    res.json({ message: "Email stored successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



//não esquecer de correr:  node js/server.js  no terminal para iniciar o servidor

/*Caso seja necessário parar o servidor pode correr: tasklist para ver qual o PID 
que o node está a ocupar e de seguida correr: taskkill /F /PID <pid> */

//De seguida correr: node js/server.js para iniciar o servidor