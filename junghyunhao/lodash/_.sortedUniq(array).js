/**
 * 블로그 포스팅
 * https://velog.io/@junghyunhao/lodash-sortedUniq
 */

function sortedUniq(array) {
  return array && array.length ? baseSortedUniq(array) : [];
}
/**
  The base implementation of _.sortedUniq and _.sortedUniqBy without
  support for iteratee shorthands.
  *
  @private
  @param {Array} array The array to inspect.
  @param {Function} [iteratee] The iteratee invoked per element.
  @returns {Array} Returns the new duplicate free array.
  */
function baseSortedUniq(array, iteratee) {
  var index = -1,
    length = array.length,
    resIndex = 0,
    result = [];

  while (++index < length) {
    var value = array[index],
      computed = iteratee ? iteratee(value) : value;

    if (!index || !eq(computed, seen)) {
      var seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}

function sortedUniq(array) {
  //  array 가 undefined 혹은 array길이가 1 이상이라면 baseSortedUniq(array)를 실행하고 아니면 빈 array를 return 한다.
  return array && array.length ? baseSortedUniq(array) : [];
}

function baseSortedUniq(array, iteratee) {
  // 첫 index를 -1로 지정해주고 밑에 while문을 실행하기전 ++index prefgix로 1씩 더해줄 예정
  let seen;
  let index = -1;
  let resIndex = 0;
  const { length } = array;

  // 결과 값을 담을 빈 array
  const result = [];

  // 배열의 길이보다 하나 작은 index값 만큼 돈다. 즉 모든 array를 돌때 까지 실행하는 while 문
  while (++index < length) {
    // array의 index의 value를 변수 value에 담는다
    // computed 변수도 iteratee가 undefined이면 해당 value를 computed 변수에 담는다. (현재의 경우에 해당)
    const value = array[index],
      computed = iteratee ? iteratee(value) : value;

    //  두 값을 비교하는 .eq lodash 함수가 사용되었다.
    // console.log(_.eq("Geeks", "Geeks" )); => true 를 리턴함
    // !index는 index가 0이거나 혹은 computed!==seen 이 아닌경우,
    // 즉 맨처음 loop에서 해당 if문을 타거나 혹은 이전에 저장한 computed값과 seen이 다를때 해당 if 문을 탈 것이다.
    if (!index || !eq(computed, seen)) {
      // 해당 loop에서의 computed값을 seen에 넣어준다.
      seen = computed;
      // 이전 값과 중복되지 않을 경우에만 value로 넣어준다.
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}
