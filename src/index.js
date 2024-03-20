// Створення екземпляр прототипа UserService

/*const userService = new UserService(
  "https://jsonplaceholder.typicode.com/users",
);}*/


const usersService = new UsersService();

async function App() {
  const users = await usersService.getAllUsers();
  console.log(users);
  const handleClick = (id) => () => {
    usersService.getUserById(id)
    };
  usersService.renderUsersList(users);
  usersService.getUserById(users[0].id)

  /**
   * Виклик метода із прототипа userService для отримання списка юзерів.
   * const users = await userService....
   */
  //
  //
  /**
   * Відображення списку юзерів на сторінці
   * userService.renderUsersList....
   */
}



App();
