'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WeaponSchema extends Schema {
  up () {
    this.create('weapons', (table) => {
      table.increments()
      table.string('name', 30).notNullable()
      table.string('type', 30).notNullable()
      table.integer('attack', 30).notNullable()
      table.integer('evade', 30).notNullable()
      table.string('combo', 30).notNullable()
      table.string('effects', 255)
      table.string('license', 254)
      table.string('find', 254)
      table.string('treasure', 254)
      table.string('stolen', 254)
      table.string('drops', 254)
      table.text('purchased ', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('weapons')
  }
}

module.exports = WeaponSchema
