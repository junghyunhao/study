/*
 * https://programmers.co.kr/learn/courses/30/lessons/72410
 ! 신규 아이디 추천
 */

function solution(new_id) {
  // 소문자, 특수문자 치환 
  let result = new_id.toLowerCase().replace(/[^\w-_.]/g, '').replace(/\.{2,}/g, '.')
  // 조건에 맞추어 result 변환
  if (result.slice(0,1) == ".") result = result.slice(1)
  if (result == "") result = "a"
  if(result.length >= 16) result = result.slice(0,15)
  if(result.slice(-1) == ".") result = result.slice(0,result.length - 1)
  // 길이가 2개 이하면 맨 뒤에 마지막 글자 반복
  if (result.length == 2 ) result = result.concat(result.slice(-1))
  if (result.length == 1 ) result = result.concat(result.slice(-1),result.slice(-1))
  // 마지막 글자가 . 인경우 확인
  if(result.slice(-1) == ".") result = result.slice(0,result.length - 1)

  return result
}

solution("z-+.^.")
//"z--"

/* 
? 더 좋은 풀이
* 체이닝과 정규식으로 좀 더 깔끔한 풀이
! 알게된것
* string.padEnd(지정할길이,지정문자) : 현재 문자열에 인수로 지정된 길이만큼 지정 문자로 채워 새로운 문자열로 반환
*
* const str = "Hi";
* console.log(str.padEnd(10)); 
* // "Hi        " > Hi + 8개 공백  = 10자
* console.log(str.padEnd(10, "!"));
* // "Hi!!!!!!!! > Hi + 8개 느낌표 = 10자

*/

const solution = (new_id) => {
  const id = new_id
      .toLowerCase()
      .replace(/[^\w\d-_.]/g, '')
      .replace(/\.{2,}/g, '.')
      .replace(/^\.|\.$/g, '')
      .padEnd(1, 'a')
      .slice(0, 15)
      .replace(/^\.|\.$/g, '')        
  return id.padEnd(3, id[id.length-1])
}