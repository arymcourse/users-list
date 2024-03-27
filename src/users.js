function UsersService() {
}

UsersService.prototype.getAllUsers = async function () { //getAllUsers - задаємо назву нової функції. async - щоб працював await. UsersService.вкладання.
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); //await - допоки не отримаємо "дані" по посиланню, нижній код не виконується
  if (response.ok) { // если HTTP-статус в диапазоне 200-299 // .ok - це такий запис на перевірку
    // получаем тело ответа (см. про этот метод ниже)
    const users = await response.json(); // .json - перетворюємо зі "строки" в масив даних
    return users; // return для віддачі ще кудась, не пишемо return - не отримуємо дані
  } else {
  alert("Ошибка HTTP: " + response.status);
}
}; // поки ми лише вклали в "users" масив об'єктів з інформ. про "користувачів". Далі нам потрібно вивести їх в "<ul class="usersList" id="usersContainer">" - виводимо за допомогою "renderUsersList"

UsersService.prototype.renderUsersList = function (users) { // "renderUsersList" - вкладений метод
  let usersContainer = document.getElementById("usersContainer"); // шукаємо по найвищому рівні "document". Робимо зв'язок з "<ul class="usersList" id="usersContainer">"
  const mappedUsers = users.map((user, index) => { // Коли маємо справу з масивом об'єктів, - користуємось .map.
    return `<li class="user" key=${user.id} onclick="handleClick(${user.id})"> 
              <img src="https://api.lorem.space/image/face?w=120&h=120&r=${user.id}" class="usersPortrait" alt="usersPortrait"> 
              <div class="usersInformation">
                    <span class="usersListName">${user.name}</span>
                    <span class="usersCompany">Company: ${user.company.name}</span>
              </div>
            </li>`;
  }); // при Return наразі вміст - це масив об'єктів, які потрібно вивести "строково"? Масив об'єктів ми не можемо вивести візуально, тому обертаємо "строкою" 
  usersContainer.innerHTML = mappedUsers.join('') // .innerHTML - щоб включити в основний "html" нами вставлений "html". "Join" - масив "строк" склеюємо в одну "строку", "('')" - нам не потрібен розділювач, в якомусь іншому випадку (", ").
};


UsersService.prototype.getUserById = async function (id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  let userData = {}; // "= {}" - об'явлення пустого об'єкта
  if (response.ok) {
    userData = await response.json();
  } else {
  alert("Ошибка HTTP: " + response.status);
  }
  let userInfo = document.getElementById("userInfo"); // зв'язуємо з "userInfo" по id в html
  const userInfoHtml = `<img src="https://api.lorem.space/image/face?w=120&h=120&r=${userData.id}" class="usersPortrait" alt="usersPortrait">
                            <div class="usersInformation">
                                <span class="usersDescriptionName">${userData.name}</span>
                                <span class="username">Username: ${userData.username}</span>
                            </div>`;
  userInfo.innerHTML = userInfoHtml;

  let userDetails = document.getElementById("userDetails");
  const userserDetailsHtml = `<span class="DataItem">${userData.company.name}</span>
                              <span class="DataItem">${userData.phone}</span>
                              <a href="mailto:${userData.email}" class="dataLink">${userData.email}</a>
                              <span class="DataItem">${userData.address.suite}, ${userData.address.street}, ${userData.address.city} / ${userData.address.zipcode}</span>`;
 userDetails.innerHTML = userserDetailsHtml;
};



/* В порівняння then/catch

let usersContainer = document.getElementById("usersContainer");
fetch('https://jsonplaceholder.typicode.com/users')
.then((usersData) => {
 usersData.json()
  .then((usersParsed) => {
   const users = usersParsed;
   console.log('users', users);
const list = users.map((item, i, arr) => {
  console.log(item, i);
  const li = i;
  return li;
});
console.log(users, list);
usersContainer.innerHTML = "";
  })
})
.catch((error) => {
 alert("Ошибка HTTP: " + JSON.stringify(error));
})
*/

