// * https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

function solution(new_id){
    let answer = new_id
                  .toLowerCase()
                  .replace(/[^a-z0-9\_\-\.]/g, "") // []와 ^ 같이 쓰면 []내부의 문자열에 해당하지 않는 문자열
                  .replace(/\.+(?=.)/g, '.') // + 앞의 정규식이 1회이상 반복, "?=" 뒤의 값이 뒤따라오는 "?="의 앞의 값
                  .replace(/^\.|\.$/g, "")  // ^ + 첫번째 값, 마지막값 + $
                  .replace(/^$/,'a') // ^$ 같이쓰면 공백
                  .slice(0, 15)
                  .replace(/\.$/,"")
    
    while(answer.length < 3){
       answer = answer + answer[answer.length-1]
    }
    
    return answer
  }
