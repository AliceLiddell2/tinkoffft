/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  const searchForNumbers = /-?\d+(?:\.\d*)?/gi;
  const stringWithNumbers = string.match(searchForNumbers);
  const numbers = stringWithNumbers.map(element => parseFloat(element));

  const MinMax = { min: Math.min(...numbers), max: Math.max(...numbers) };

  return MinMax;
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }
  return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
const cache = [0, 1];

function fibonacciWithCache(x) {
  let result = cache[x];

  if (typeof result !== 'number') {
    result = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
    cache[x] = result;
  }
  return result;
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  let c = 1;
  let gc = 0;
  let str = '';
  let cond = cols - 1;
  let sdvig = Math.ceil((max + 1) / cols);

  if (max < cols) {
    cond = max;
  }
  while (gc < sdvig) {
    str += ' ' + gc;
    gc += sdvig;
    for (let i = 0; i < cond; i++) {
      if (gc < 10) {
        str += '  ' + gc;
        gc += sdvig;
      } else {
        str += ' ' + gc;
        gc += sdvig;
      }
    }
    str += '\n';
    gc = c++;
  }
  return str.slice(0, -1);
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  const arrForNewCountedString = [];
  let counterForLet = 1;
  let arrCounter = 0;

  arrForNewCountedString[0] = input[0];
  for (let i = 0; i < input.length; i++) {
    if (arrForNewCountedString[arrCounter] === input[i + 1]) {
      counterForLet += 1;
    } else {
      if (counterForLet !== 1) {
        arrForNewCountedString[arrCounter] = input[i] + counterForLet;
        arrForNewCountedString[arrCounter + 1] = input[i + 1];
        counterForLet = 1;
      } else {
        arrForNewCountedString[arrCounter + 1] = input[i + 1];
      }
      arrCounter += 1;
    }
  }
  return arrForNewCountedString.join('');
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
