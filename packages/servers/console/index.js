const express = require('express')
const greeter = require("greeter")
const {config} = require("common");

function hello() {
    console.log(process.cwd())
    console.log(config.get("name"))
    let hello = greeter("console");
    console.log(hello)
    return hello
}
hello()

const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send(hello())
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})