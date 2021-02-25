/**
 * 블로그 포스팅
 * https://velog.io/@junghyunhao/pairs
 */

function pairs(object) {
  // 시작 index값을 -1로 셋팅해준다. (후에 ++index를 통해 0부터 시작하게 만들 예정)
  var index = -1,
    //keys() lodash 함수로서 Object의 key 값만 배열에 담는 함수이다.
    props = keys(object),
    // 담긴 key값의 length이므로 pair 갯수 만큼 이라고 볼 수 있다.
    length = props.length,
    // pair 갯수의 길이만큼의 empty array를 만든다.
    result = Array(length);

  // while문을 `index 0 to 길이 전까지` 즉 모든 pairs를 돌때까지 실행하면서 result index값으로 접근해서 key value 값을 넣어준다.

  while (++index < length) {
    // key는 첫번째 key값이고
    var key = props[index];

    // pair길이만큼의 빈 배열에 [key, value]넣어준다.
    result[index] = [key, object[key]];
  }
  return result;
}
