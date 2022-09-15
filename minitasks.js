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

function User(firstName, lastName, email, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
}

const userPrototype = {
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  logout: function () {
    this.isLoggedIn = false
    console.log('Вы вышли из аккаунта');
  },

  login: function () {
    this.isLoggedIn = true
    console.log('Вы вошли в аккаунт');
  }
};

User.prototype = userPrototype;

const IvanIvanov = new User('Ivan', 'Ivanov', 'sdsd@sdsd.sd', 27);
const PetrPetrov = new User('Petr', 'Petrov', 'sdsd@ww.we', 35)

console.log(PetrPetrov.login());

/////////////////////////////////////////////////////////  Минитаска. Методы примитивов //////////////////////////////////////////////////

/* Напишите следующие функции:
Функция которая принимает строку и возвращает количество слов в ней.
Функция, которая получает строку и возвращает размер самого большого слова в ней */

/* Функция которая принимает строку и возвращает количество слов в ней. */

function toWordsSum(str) {
  return str.replace(/ {1,}/g, ' ').split(' ').length
}
console.log(toWordsSum('Test Test         Test Test                 Test'));

/* Функция, которая получает строку и возвращает размер самого большого слова в ней */

function toLongestWord(str) {
  const splited = str.split(' ');
  let result = 0;

  for (let i = 0; i < splited.length; i++) {
    if (splited[i].length > result) {
      result = splited[i].length
    }
  }
  return result;
}

console.log(toLongestWord('Гиппопотомомонстросесквиппедалиофобия - это боязнь длинных слов, которое состоит из 37 букв'));