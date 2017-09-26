/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  l=string.length;
  let re = /-?\d+(?:\.\d*)?/gi;
  let mat = string.match(re);
  for ( var i=0;i<mat.length;i++) {
      mat[i]=+mat[i];
  }
  let obj = { min:  Math.min(...mat), max:  Math.max(...mat) };
  return obj;
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
  else
  {
      if ((x === 1) || (x === 2)) {
          return 1;
      }
      else {
          return fibonacciSimple(x - 1) + fibonacciSimple(x - 2);
      }
  }
  return x;
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  let Cache = [];
  if ( x === 0 )
      return Cache[0]=0;
  if ( x === 1 )
      return Cache[1]=1;
  if ( !Cache[x] ){
      Cache[x] = fibonacciWithCache(x-1) + fibonacciWithCache(x-2);
  }
  return x=Cache[x];
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
  let mass = [];
  mass[0] = 0;
  let str = [];
  let sdvig = (max + 1) / cols;
  if ((max + 1) % cols === 0) {
      for (let i = 1; i < max + 1; i++) {
          if ((i % cols) !== 0) {
              mass[i] = mass[i - 1] + sdvig;
          }
          else {
              mass[i] = mass[i - cols] + 1;
          }
      }
      let k = 1;
      let j = 1;
      let masstr = [];
      masstr[k - 1] = mass[j - 1];
      masstr[k] = ' ';
      k++;
      while (j !== max + 1) {
          if (j % cols !== 0) {
              masstr[k] = mass[j];
              masstr[k + 1] = ' ';
              k = k + 2;
              j++;
          }
          else {
              masstr[k] = '\n';
              masstr[k + 1] = mass[j];
              masstr[k + 2] = ' ';
              k = k + 3;
              j++;
          }
      }
      return (masstr.join(''));
  }
  else {
      for (let i = 1; i < max + 1; i++) {
          mass[i] = mass[i - 1] + 1;
      }
      return (mass.join(' '));
  }  
}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let arr = [];
  let k = 1;
  let j = 0;
  let n = input.length;
  arr[0] = input[0];
  for (let i = 0; i < n; i++) {
      if ( arr[j] === input[i+1] ){
          k++;
      }
      else {
          if (k !== 1) {
              arr[j+1] = k;
              arr[j+2] = input[i+1];
              k = 1;
              j = j+2;
          }
          else {
              arr[j+1] = input[i+1];
              j++;
          }
      }
  }
  let inp = arr.join('');
  return(inp);
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};
