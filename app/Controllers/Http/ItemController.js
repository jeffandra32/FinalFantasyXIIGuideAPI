'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Item = use('App/Models/Item');

class ItemController {
  async index() {
    const Items = await Item.all();
    return Items;
  }

  async store({ request, response }) {
    const data = request.only(['name', 'effect', 'location', 'icon', 'addEffect']);

    const items = await Item.create(data);

    return response.status(201).json(items);
  }
}

module.exports = ItemController;
