
/*
 * https://programmers.co.kr/learn/courses/30/lessons/77484
 ! 로또의 최고 순위와 최저 순위
 */

 function getCurrentRank(num){
  // rank의 index + 1 값으로 순위를 계산해서 리턴
  const rank = [6,5,4,3,2,1]
  if( num <= 1 ){
    // 1개가 맞거나 0개가 맞으면 6등 반환
    return 6
  }
 return rank.findIndex((el) => el === num) + 1  
}

function solution(lottos, win_nums) {
  const zeroCount = lottos.filter(el => el === 0).length
  let countWinNum = 0
    for(let i of win_nums){
       if(lottos.includes(i)){
         countWinNum++
       }
    }
  // 최대로 맞은 갯수는 로또 배열중 0인값과, 당첨에 일치하는 값의 갯수를 더한 갯수
  const max = getCurrentRank(zeroCount + countWinNum)
  // 최소로 맞은 갯수는 당첨에 일치하는 값의 갯수
  const min = getCurrentRank(countWinNum)
  return [max,min]
}
