'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EsperSchema extends Schema {
  up () {
    this.create('espers', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('level', 50).notNullable()
      table.string('hp', 255).notNullable()
      table.string('attack', 255).notNullable()
      table.string('steal', 255)
      table.text('description')
      table.text('location')
      table.text('locked-license')
      table.string('avatar')
      table.timestamps()
    })
  }

  down () {
    this.drop('espers')
  }
}

module.exports = EsperSchema
