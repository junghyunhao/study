
/*
 * https://programmers.co.kr/learn/courses/30/lessons/64061
 ! 크레인 인형뽑기 게임
 */

 function solution(board, moves) {
  let sameCount = 0
  const result = []
  for(let i in moves) {
    const moveValue = moves[i] - 1
    for(let j in board) {
      const boardValue = board[j]
      const boardIdx = parseInt(j)
      const length = result.length
      if(boardValue[moveValue]) {
        // 배열중에 move에서 현재 찾는 index에 있는 값중 0이 아닌값을 찾고 0으로 변경
        if (result[length-1] == boardValue[moveValue]) {
          // 결과의 마지막값과 지금 찾는값이 같으면 두개다 없애고, 카운트값 증가
          result.pop()
          sameCount += 2
        } else { 
          result.push(boardValue[moveValue])
        }
        board[boardIdx][moveValue] = 0
        break;
      } 
    }
  }
  return sameCount
}