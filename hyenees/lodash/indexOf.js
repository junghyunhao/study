// array (Array): The array to inspect.
// value (*): The value to search for.
// [fromIndex=0] (number): The index to search from.

function indexOf(array, value, fromIndex) {
  const length = array == null ? 0 : array.length
  if (!length) {
    return -1
  }
  // 찾고싶은 인덱스의 시작위치
  let index = fromIndex == null ? 0 : toInteger(fromIndex)
  // 인덱스가 음수일경우 배열의 끝에서부터 시작
  if (index < 0) {
    // 배열의 앞에서 부터의 인덱스로 바꾸기
    index = Math.max(length + index, 0)
  }
  return baseIndexOf(array, value, index)
}



function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex)
}


function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1
  const { length } = array
// 배열을 돌면서 찾고싶은 값과 같을 때의 인덱스를 리턴
  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  // 찾는 값이 없을 때는 -1을 리턴
  return -1
}

// NaN: Not a Number 숫자가아니면 true 숫자면 false
function baseIsNaN(value) {
  return value !== value
}
  