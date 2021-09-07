const express = require('express')
const hello = require('./hello')

const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send(hello())
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})