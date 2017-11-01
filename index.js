const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const dirViews = `${__dirname}/site/views`;

app.use(express.static('site/public'));

app.listen(port, () => {

    console.log(`Listening on port ${port}`);

});

app.get('/', (req, res) => {

    res.sendFile(path.join(`${dirViews}/index.html`));

});
