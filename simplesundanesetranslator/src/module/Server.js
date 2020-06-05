const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 6000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

app.post('/', (req, res) => {
    var translatorModule = require('./TranslatorModule.js')
    let r = translatorModule.translateBahasa(req.body.before, req.body.insun)
    res.send(
        `${r}`,
    )
})

app.listen(port, () => console.log(`Listening on port ${port}`))