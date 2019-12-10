/**
 * Created by sang.nguyen on 06/12/2019
 */

const router = require('express').Router()
const Controller = require(`${global.APP_CONTROLLER_PATH}/product.controller`)
const controller = new Controller()

// CRUD
router.get('/', controller.getAll)

// other route

module.exports = router