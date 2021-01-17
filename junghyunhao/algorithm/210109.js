/**
 * https://programmers.co.kr/learn/courses/30/lessons/12916
 * ? 문자열에서 y와 p의 개수
 */
function solution(s) {
  let answer = true;

  // 1. 먼저 s string 을 `split` 메서드를 통해 알파벳 별로 나뉘어진 배열을 만든다.
  const sArray = s.split("");

  // 2. 그 배열에서 각각 필터를 돌려서 `p만 담는 배열`, `y 만 담는 배열`을 만든다.
  const pFilter = sArray.filter((chr) => chr === "p" || chr === "P");
  const yFilter = sArray.filter((chr) => chr === "y" || chr === "Y");

  // 3. p, y 모두 하나도 없다면 `true`를 리턴할 수 있도록 `includes` 메서드로 분기 시킨다.
  if (!s.includes("p" || "P") && !s.includes("y" || "Y")) {
    answer = true;
  }

  // 4.  두 배열의 `length` 를 비교하여 `true/false`로 분기 시켰다.
  else if (pFilter.length === yFilter.length) {
    answer = true;
  } else if (pFilter.length !== yFilter.length) {
    answer = false;
  }

  return answer;
}

/**
   모범답안 
   */
function numPY(s) {
  // 즉 소,대문자를 포함한 p 배열의 길이와 y배열의 길이가 같으면 true 아니면 false를 return 하는 깔끔한 함수가 완성된다.
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
