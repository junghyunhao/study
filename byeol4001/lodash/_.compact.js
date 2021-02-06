/*
! _compact 
? 배열의 falsy한 값[ false, null, 0, "", undefined, NaN ]을 제거한다

  * @param {Array} 첫번째인자 : 배열 - _.compact를 사용 할 배열
  * @returns {Array} 리턴 : falsy값이 제거된 새로운 배열

  todo _.compact([0, 1, false, 2, '', 3]);  => [1, 2, 3]
*/

function compact(array) {
  var index = -1,
    //wihle문 돌 index값
    length = array == null ? 0 : array.length,
    //배열이 비어있지 않은지 확인하고 lenth를 넣어줌
    resIndex = 0,
    result = [];
  //result값 세팅

  while (++index < length) {
    //index는 -1이였으나 ++되면서 들어와서 0부터 시작된다.
    var value = array[index];
    if (value) {
      //value가 truthy한지 확인
      result[resIndex++] = value; // result배열에 truthy한 값을 넣어준다
    }
  }
  return result;
}
