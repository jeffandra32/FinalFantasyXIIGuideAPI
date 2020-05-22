'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Esper = use('App/Models/Esper');

class EsperController {
  
  async index() {
    const espers = await Esper.all();
    return espers;
  }

  async store({ request, response }) {
    const data = request.only([
      'name',
      'level',
      'hp',
      'attack',
      'steal',
      'description',
      'location',
      'lockedlicense',
      'avatar',
    ]);

    const espers = await Esper.create(data);

    return response.status(201).json(espers);
  }
}


module.exports = EsperController
