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
  if (isNaN(number) || number < 0) {
    return NaN;
  }
  if (number === 0) {
    return 1;
  }
  return number * toFactorial(number - 1);
}
console.log(toFactorial(5));


/* Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:
from(число)
to(число)

Реализовать геттеры и сеттеры для обоих свойств.
Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит.

Bonus tasks:
Создать проверки которые убедятся, что число во from меньше числа to и наоборот.
Создать проверки, которые помогут избежать попадание неправильных типов данных в from и to. */


class RangeValidator {
  #from;
  #to;
  #range = [];

  constructor (from, to) {
    this.from = from;
    this.to = to;
  }

  get from() {
    return this.#from;
  }

  get to() {
    return this.#to;
  }

  set from(value1) {
    if (typeof value1 !== 'number' || isNaN(value1)) {
      throw new TypeError (`Parametr 'from' must be number`)
    }
    if (value1 >= this.#to) {
      throw new RangeError (`Parametr 'from' must be lower than parametr 'to'`)
    }

    this.#from = value1;
  }


  set to(value2) {
    if (typeof value2 !== 'number' || isNaN(value2)) {
      throw new TypeError (`Parametr 'to' must be number`)
    }
    if (value2 <= this.#from) {
      throw new RangeError (`Parametr 'to' must be greater than parametr 'from'`)
    }

    this.#to = value2;
  }

  get range() {
    /* this.#range = [];  Не понятно где лучше объявить пустой массив. Здесь, либо перед конструктором?*/  
    
    for (; this.#from <= this.#to; this.#from++) {
      this.#range.push(this.#from)
    }
    return this.#range;
  }

  validate(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new TypeError (`Parametr 'to' must be number`)
    }
    if (num < this.#from) {
      throw new RangeError('The number is less than the lower limit')
    }
    if (num > this.#to) {
      throw new RangeError('The number is greater than the upper limit')
    }
    return num;
  }

}

const range1 = new RangeValidator(10, 20);
console.log(range1);



