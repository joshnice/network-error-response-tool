
const express = require("express");
const app = express();
const port = 3030;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("default!")
  });
  

app.get("/health_check", (req, res) => {
  res.send("Working!")
});

app.get("/:errorCode", (req,res) => {

    const paramErrorCode = req.params.errorCode;
    const errorCode = parseInt(paramErrorCode);

    try {
        res.status(errorCode).send(`Error code ${errorCode} returned`);
    } catch {
        res.status(500).send(`Error code ${paramErrorCode} was incorrect`);
    }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
