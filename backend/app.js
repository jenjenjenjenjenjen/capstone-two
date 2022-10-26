const express = require("express");
const curiosity = require('./routes/curiosity');
const perseverance = require('./routes/perseverance');
const opportunity = require('./routes/opportunity');
const spirit = require('./routes/spirit');
const missions = require('./routes/missions');
const potd = require('./routes/potd');
const epic = require('./routes/epic');
const eonet = require('./routes/eonet');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use("/curiosity", curiosity);
app.use("/perseverance", perseverance);
app.use("/opportunity", opportunity);
app.use("/spirit", spirit);
app.use("/missions", missions);
app.use("/potd", potd);
app.use("/epic", epic);
app.use("/eonet", eonet);


app.listen(5000, function() {
    console.log("App on port 5000");
});