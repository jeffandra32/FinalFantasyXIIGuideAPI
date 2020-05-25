'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemsSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('effect', 255).notNullable()
      table.string('location', 255).notNullable()
      table.string('icon', 255).notNullable()
      table.string('addEffect', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemsSchema
