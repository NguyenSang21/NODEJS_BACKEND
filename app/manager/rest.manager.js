
const BaseManager = require(`${global.APP_MANAGER_PATH}/base.manager`)
const I18nLogic = require(`${global.CORE_LOGIC_PATH}/i18n.bis`)
const i18n = require(`${global.CORE_COMMON_PATH}/i18n`)

class RestManager extends BaseManager {
  constructor(mongoose) {
    super()
    this.i18nLogic = new I18nLogic(mongoose)
  }

  getI18nMessage(key, lang) {
    if (key) {
      return this.i18nLogic.getMessage(key, lang)
    }
    return Promise.resolve()
  }

  responseWithError(res, err, code) {
    const sendData = { success: false }
    if (typeof err === 'object' && typeof err.message !== 'undefined') {
      sendData.message = err.message
    } else if (typeof err === 'string') {
      sendData.message = err
    }

    if (typeof code !== 'undefined') res.statusCode = code

    const i18nKey = sendData.message
    this.getI18nMessage(i18nKey, res._lang)
      .then(message => {
        if (message) {
          sendData.message = message
        } else {
          sendData.message = i18n.defaultMessage(i18nKey)
        }

        res.json(sendData)
      }).catch(() => {
        res.json(sendData)
      })
  }

  responseWithSuccess(res, data, code) {
    let sendData = { success: true }
    if (typeof data === 'object') {
      sendData = Object.assign(data, sendData)// merge the objects
    } else if (typeof data === 'string') {
      sendData.message = data
    }

    if (typeof code !== 'undefined') res.statusCode = code

    this.getI18nMessage(sendData.message, res._lang)
      .then(message => {
        if (message) sendData.message = message

        res.json(sendData)
      }).catch(() => {
        res.json(sendData)
      })
  }
}

module.exports = RestManager
