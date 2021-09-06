const generator = require("generator")
module.exports = (name) => {
    return "hello " + name + " in " + generator();
}