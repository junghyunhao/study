
/*
 * https://programmers.co.kr/learn/courses/30/lessons/64065
 ! 튜플
 */

function solution(s) {
  const arr = s.slice(2).slice(0,-2).split('},{')
  const sortArr = arr.sort((a,b)=>a.length - b.length)
  // 숫자로 구성된 배열로 변경 후 정렬
  let count = 0
  const max = sortArr[sortArr.length-1].split(',').length  // 총 배열의 길이 판단
  const result = new Set()
  while(count < max){
    // 배열의 길이만큼 배열안의 값들을 다시 객체로 변경해서 그 안의 값을 하나씩 Set에 넣어줘서 중복을 제거하면서 쌓아줌
    const arr = sortArr[count].indexOf(',') ? sortArr[count].split(',') : [sortArr[count]]
    arr.forEach(el=>result.add(parseInt(el)))
    count++
  }
  return [...result]
}
