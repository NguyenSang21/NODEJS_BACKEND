/**
 * Created by sang.nguyen on 06/12/2019
 */

const path = require('path')

// Root path
global.APP_ROOT_PATH = `${__dirname}/app`

// Set global config
global.APP_ROUTE_PATH = `${global.APP_ROOT_PATH}/route`
global.APP_CONTROLLER_PATH = `${global.APP_ROOT_PATH}/controller`

// related resources

/***************************** EXAMPLE **********************************************
 * global.CORE_LOGIC_PATH = path.join(__dirname, '..', 'saleman-core/business-logic')
 */
