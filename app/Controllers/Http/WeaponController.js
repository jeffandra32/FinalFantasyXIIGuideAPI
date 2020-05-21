'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Weapons = use('App/Models/Weapon');

class WeaponController {
  async index() {
    const weapons = await Weapons.all();
    return weapons;
  }

  async store({ request, response }) {
    const data = request.only([
      'name',
      'type',
      'attack',
      'evade',
      'combo',
      'effects',
      'license',
      'find',
      'treasure',
      'stolen',
      'drops',
      'purchased',
    ]);

    const weapons = await Weapons.create(data);

    return response.status(201).json(weapons);
  }
}

module.exports = WeaponController;
