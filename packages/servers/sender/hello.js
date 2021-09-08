const greeter = require("@lerna-test/greeter")
const {config} = require("@lerna-test/common");

function hello() {
    return greeter(config.get("name"))
}
module.exports = hello