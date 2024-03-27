// index.js - основна логіка, все включене в неї в окремих .js, як приклад "users.js"

const usersService = new UsersService(); //Чому ми об'являємо "new"? Class - буде використовуватися деінде, копіюємо параметри на основі яких відбуваються зміни. Включили в змінну "usersService" що? Включили зміни на основі основних даних.
async function App() {
  const users = await usersService.getAllUsers();
  usersService.renderUsersList(users);
  usersService.getUserById(users[0].id);
 }
App(); // Виклик функціїї.



const handleClick = (id) => { // Такий вигляд функції для "обробника "click" чи іншої події
  usersService.getUserById(id) // 
}

/*
const usersService = new UsersService();
async function App() {
  console.log(usersService.getAllUsers);
  const users = await usersService.getAllUsers();
  console.log(users);
  const handleClick = (id) => () => {
    usersService.getUserById(id)
    };
  usersService.renderUsersList(users);
  usersService.getUserById(users[0].id)
  }
App();

*/