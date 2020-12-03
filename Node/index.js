const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port=8000;
const plotRouter = require('./plot/router');

app.use(cors());
app.use(bodyParser.json());
app.use('/', plotRouter);

app.listen(port, () => {
    console.log(`Node is running on port- ${port}`);
});

