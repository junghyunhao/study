/**
 *
 * @param {*} 숫자문자열과 영단어
 */ //programmers.co.kr/learn/courses/30/lessons/81301
https: function solution(s) {
  const mappedNumber = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let answer = "";
  answer = s.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/gi,
    function (matched) {
      return mappedNumber[matched];
    }
  );
  return answer * 1;
}
