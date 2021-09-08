const generator = require("@lerna-test/generator")
module.exports = (name) => {
    return "hello " + name + " in " + generator();
}