/*
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 ! Who likes it?
 ?  likes [] -- must be "no one likes this"
 ?  likes ["Peter"] -- must be "Peter likes this"
 ?  likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
 ?  likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
 ?  likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
 todo : 들어오는 배열의 length에 따라 반환되는 값이 달라진다. 
 *
 */

function likes(names) {
  const length = names.length;
  if (!length || !names) {
    return 'no one likes this';
  } else if (length < 2) {
    return `${names[0]} likes this`;
  } else if (length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length <= 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
}

/* 
? 더 좋은 풀이
* 삼항 연산자를 이용해서 조건을 확인했고 내가 두개로 나눠서 확인했던 if문 조건을 slice로 자르고 join으로 합친 값을 사용해 if문의 조건을 줄여서 사용했다.
*/

function likes(names) {
  var len = names.length;
  if (len < 2) {
    return (names[0] ? names[0] : 'no one') + ' likes this';
  }
  if (len == 2) {
    return names.join(' and ') + ' like this';
  }
  return (
    names.slice(0, 2).join(', ') +
    ' and ' +
    (len > 3 ? len - 2 + ' others' : names[2]) +
    ' like this'
  );
}
