'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Esper extends Model {
  static get hidden() {
    return ['updated_at','created_at'];
  }
}

module.exports = Esper
