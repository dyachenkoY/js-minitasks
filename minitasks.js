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

/* Создайте функцию, которая принимает неограниченное количество входящих данных, и возвращает количество строк, переданных ей в этом массиве. Решить с использованием стрелочных функций. */

const arrGeneral = [3, 5, 2, 8, 5, 2, 8, 'строка1', 'строка2', 3, 0, 324, 3, 'строка3', 'строка4', 'строка5', 'строка6', 55, 3, 454, 'строка7', 'строка8']

const arrStrings = arrGeneral.filter(strings => strings = typeof strings === 'string');

console.log(arrStrings.length);


/* Создайте функцию продвинутого калькулятора. Он принимает знак, а  затем неограниченное количество чисел, над которыми проведет указанную операцию. */

const sumOfNumbers = (...numbers) => numbers.reduce((sum, curentNum) => sum + curentNum);
const subOfNumbers = (...numbers) => numbers.reduce((sub, curentNum) => sub - curentNum);
const multiplicationOfNumbers = (...numbers) => numbers.reduce((multiplication, curentNum) => multiplication * curentNum);
const divOfNumbers = (...numbers) => numbers.reduce((div, curentNum) => div / curentNum);

const advancedCalk = function (sign, ...numbers) {
  let result;
  switch (sign) {
    case '+': {
      result = sumOfNumbers(...numbers);
      return result
    }
    case '-': {
      result = subOfNumbers(...numbers);
      return result
    }
    case '*': {
      result = multiplicationOfNumbers(...numbers);
      return result
    }
    case '/': {
      result = divOfNumbers(...numbers);
      return result
    }
    default:
      result = null;
  }
  return result;
}

console.log(advancedCalk('*', 5, 5, 5, 5, 5));

/* Имея массив чисел, найдите в нем самое большое. Не используйте циклы или методы перебора массива.*/

const someNumbers = [1, 34, 37, 76, 4, 26, 79, 123, 222, 333, 210, 432, 89, 190, 433]
let getMaxNumber = Math.max(...someNumbers);
console.log(getMaxNumber);


/* Создать рекурсивную функцию вычисления факториала числа.Факториал - произведение всех натуральных чисел от 1 до x.
// 5! = 1 * 2 * 3 * 4 * 5 = 120 */

function toFactorial(number) {
  if (number === 1) {
    return 1;
  } else if (number === 0) {
    return 1;
  }
  return number * toFactorial(number - 1);
}
console.log(toFactorial(10));