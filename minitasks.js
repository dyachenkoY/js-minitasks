/* Создать функцию-конструктор User
у пользователей должны быть свойства:
firstName
lastName
email
age
isLoggedIn

Создать прототип для обїектов пользователей
в прототипе реализовать следующий методы:
getFullName - метод, который вернет строчку, содержащую имя и фамилию пользователя
logout - метод, который имитирует логаут пользователя, меняя переменную isLoggedIn
login - метод, который имитирует логин пользователя, меняя переменную isLoggedIn */

function User (firstName, lastName, email, age, isLoggedIn) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
  }
  
  const userPrototype = {
    getFullName: function () {
      return (`${this.firstName} ${this.lastName}`);
    },
  
    logout: function () {
      if (isLoggedIn = false)
      console.log('Вы вышли из аккаунта');
    },
  
    login: function () {
      if ( isLoggedIn = true)
      console.log('Вы вошли в аккаунт');
    }
  }; 
  
  
  User.prototype = userPrototype;
  
  const IvanIvanov = new User('Ivan', 'Ivanov', 'sdsd@sdsd.sd', 27, true);
  const PetrPetrov = new User('Petr', 'Petrov', 'sdsd@ww.we', 35, false)
  
  console.log(PetrPetrov);