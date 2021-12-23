
/*
 * https://programmers.co.kr/learn/courses/30/lessons/42889
 ! 실패율
 */

 function solution(N, stages) {
  const result = []
  let user = stages.length
  for(let i = 1 ; i <= N ; i++){
    const notClearUser = user - stages.filter(el=>el > i).length
    // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수 , 스테이지 넘버
    result.push([notClearUser/user,i])
    user = user - notClearUser
  }
  result.sort((a,b)=>{
    // 실패율을 기준으로 정렬 후,
    return a[0] > b[0] ? -1 : 0 
  })
  // 스테이지 넘버를 반환
  return result.map(el=>el[1])
}