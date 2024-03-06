function UsersService(baseUrl) {
  this.baseUrl = baseUrl;
}

UsersService.prototype.getAllUsers = async function () {
  /**
   * Ваш код для отримання юзерів з сервера
   * async/await, fetch, try/catch, ...
   *
   * (!) https://jsonplaceholder.typicode.com/users
   */
};

UsersService.prototype.getUserById = async function (id) {
  /**
   * Ваш код для отримання юзера по id з сервера
   * async/await, fetch, try/catch, ...
   *
   * (!) https://jsonplaceholder.typicode.com/users/<id>
   */
};

UsersService.prototype.renderUsersList = function (list) {
  /**
   *
   * Ваш код для рендерингу списку юзерів
   * createElement, appendChild, forEach, ...
   *
   *
   * Кожен елемент списка повинен відображати такі властивості:
   * name
   * username
   * email
   * phone
   * company_name
   *
   */
};
