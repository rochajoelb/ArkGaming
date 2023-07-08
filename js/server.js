const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/store-email", (req, res) => {
  const email = req.body.email;

  const jsonData = JSON.stringify(email);
  const filePath = path.join(__dirname, "emails.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Error storing email" });
    }
  
    let emails = [];
      if (data) {
        emails = JSON.parse(data);
      }
    
    emails.push(email);

    fs.writeFile(filePath, JSON.stringify(emails), (err) => {
      if (err) {
        console.log("Algo correu mal! Erro:", err);
      }
      res.json({ message: "Email stored successfully" });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



//não esquecer de correr:  node js/server.js  no terminal para iniciar o servidor

/*Caso seja necessário parar o servidor pode correr: tasklist para ver qual o PID 
que o node está a ocupar e de seguida correr: taskkill /F /PID <pid> */

/*De seguida correr: node js/server.js para iniciar o servidor*/
