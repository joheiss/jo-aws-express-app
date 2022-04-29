const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendStatus(500);
    // res.send("Hi Josef, this is just Express with JS");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`[SERVER-LOG] Server started at port ${PORT}`);
});

module.exports = app;
