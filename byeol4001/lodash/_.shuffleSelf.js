/*
! _.shuffleSelf 
? array의 값들 중에 number의 수의 값을 랜덤으로 뽑아서 반환

  * @param {Array} 섞을 배열 전달
  * @param {number}  ( option ) - 랜덤으로 뽑을 값의 수
  * 
  * @returns {Array} 
  todo _.shuffleSelf([1,2,4,3,4],3); //호출할때마다 값이 바뀜!
  *  [ 2, 4, 3 ]
  *  [ 3, 4, 1 ] 
  *   . . .
  ! 정리는 블로그에 -> https://velog.io/@byeol4001/Lodash-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0-.shuffleSelf
*/

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
    length = array.length,
    lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = baseRandom(index, lastIndex),
      value = array[rand];
    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */

const nativeRandom = Math.random,
  nativeFloor = Math.floor;
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}
