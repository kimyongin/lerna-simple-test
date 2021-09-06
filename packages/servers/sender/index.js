const greeter = require("greeter")
const {config} = require("common");

function hello() {
    console.log(process.cwd())
    console.log(config.get("name"))
    console.log(greeter("sender"))
}
hello()
