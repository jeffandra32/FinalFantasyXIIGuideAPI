'use strict'
const User = use('App/Models/User');

class RegisterController {
  async register({ request, response }) {
    const data = request.only([
      'username',
      'email',
      'password',
      'firstName',
      'lastName',
    ]);

    const user = await User.create(data);
  
    return response.status(201).json(user);
  }
}

module.exports = RegisterController
