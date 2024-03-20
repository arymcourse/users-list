/*function UsersService(baseUrl) {
  this.baseUrl = baseUrl;
}*/

function UsersService() {
}

UsersService.prototype.getAllUsers = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    const users = await response.json();
    return users;
  } else {
  alert("Ошибка HTTP: " + response.status);
}

  /**
   * Ваш код для отримання юзерів з сервера
   * async/await, fetch, try/catch, ...
   *
   * (!) https://jsonplaceholder.typicode.com/users
   */
};

UsersService.prototype.getUserById = async function (id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let userData = {};
  if (response.ok) { // если HTTP-статус в диапазоне 200-299
    // получаем тело ответа (см. про этот метод ниже)
    userData = await response.json();
  } else {
  alert("Ошибка HTTP: " + response.status);
  }
  let userInfo = document.getElementById("userInfo");
  const userInfoHtml = `<img src="https://api.lorem.space/image/face?w=120&h=120&r=${userData.id}" class="usersPortrait" alt="usersPortrait">
                            <div class="usersInformation">
                                <span class="usersDescriptionName">${userData.name}</span>
                                <span class="username">Username: ${userData.username}</span>
                            </div>`;
  userInfo.innerHTML = userInfoHtml

  let userDetails = document.getElementById("userDetails");
  const userserDetailsHtml = `<span class="DataItem">${userData.company.name}</span>
                              <span class="DataItem">${userData.phone}</span>
                              <a href="mailto:${userData.email}" class="dataLink">${userData.email}</a>
                              <span class="DataItem">${userData.address.suite}, ${userData.address.street}, ${userData.address.city} / ${userData.address.zipcode}</span>`;
 userDetails.innerHTML = userserDetailsHtml

  /**
   * Ваш код для отримання юзера по id з сервера
   * async/await, fetch, try/catch, ...
   *
   * (!) https://jsonplaceholder.typicode.com/users/<id>
   */
};

UsersService.prototype.renderUsersList = function (users) {
  let usersContainer = document.getElementById("usersContainer");
  const mappedUsers = users.map((user, index) => {
    return `<li class="user" key=${user.id} onclick=handleClick(${user.id})>
    <img src="https://api.lorem.space/image/face?w=120&h=120&r=${user.id}" class="usersPortrait" alt="usersPortrait"> 
                  <div class="usersInformation">
                      <span class="usersListName">${user.name}</span>
                      <span class="usersCompany">Company: ${user.company.name}</span>
                  </div>
              </li>`;
  });
  usersContainer.innerHTML = mappedUsers.join('')

  /**
   *
   * Ваш код для рендерингу списку юзерів
   * createElement, appendChild, forEach, ...
   *
   *
   * Кожен елемент списка повинен відображати такі властивості:
   * name
   * company.name
   *
   * а також очікується обробник події click на кожнмоу елементі списка для відправки запита із обраним id користувача 
   * для отримання і виведення інформації по ньому.
   */
};
