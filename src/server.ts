import express from "express";
import filePath from "./filePath";

const app = express();

app.get("/", (req, res) => {
  const pathToFile = filePath("/pages/index.html");
  res.sendFile(pathToFile);
})

app.get("/asia", (req, res) => {
  const pathToFile = filePath("/pages/asia.html");
  res.sendFile(pathToFile);
});

app.get("/europe", (req, res) => {
  const pathToFile = filePath("/pages/europe.html");
  res.sendFile(pathToFile);
});

app.get("/oceania", (req, res) => {
  const pathToFile = filePath("/pages/oceania.html");
  res.sendFile(pathToFile);
});

app.get("/south-america", (req, res) => {
  const pathToFile = filePath("/pages/south-america.html");
  res.sendFile(pathToFile);
});

// using 4000 by convention, but could be changed
const PORT_NUMBER = 4000;

app.listen(PORT_NUMBER, () => {
  console.log(
    `If you can see this message in the console, this means that you successfully started the server! \n\nYou can see what comes back by visiting localhost:${PORT_NUMBER} in your browser. \n\nChanges will not be processed unless you restart your server (close and restart). \n\nThe server is currently listening for requests - press Ctrl + C to quit.`
  );
});
