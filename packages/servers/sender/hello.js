const greeter = require("greeter")
const {config} = require("common");

function hello() {
    return greeter(config.get("name"))
}
module.exports = hello