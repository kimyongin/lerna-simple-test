const _ = require('lodash')
const path = require('path')
const fs = require('fs')

let _configMap = null
let _configPath = null
let _env = null

function init() {
    !process.env.NODE_ENV && (process.env.NODE_ENV = 'local-test')
    !process.env.NODE_CONFIG_DIR && (process.env.NODE_CONFIG_DIR = require('path').join(process.cwd(), 'config'))
    _configPath = process.env.NODE_CONFIG_DIR
    _env = process.env.NODE_ENV
    return {}
}

function load() {
    !_env && _env !== process.env.NODE_ENV && init()
    if (_env) {
        const configPath = path.join(_configPath || process.cwd(), `${_env}.json`)
        if (fs.existsSync(configPath)) {
            _configMap = require(path.join(_configPath || process.cwd(), `${_env}.json`))
        }
    }
}

module.exports = init()

/**
 * @param {string=} key
 * @returns {*}
 */
module.exports.get = key => {
    !_configMap && load()
    if (!key) {
        return _configMap
    }
    return _.get(_configMap, key)
}

/**
 * @param {string} key
 * @returns {boolean}
 */
module.exports.has = key => {
    !_configMap && load()
    if (!key) {
        return false
    } else {
        return _.has(_configMap, key)
    }
}