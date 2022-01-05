
/*
 * https://programmers.co.kr/learn/courses/30/lessons/12939
 ! 최댓값과 최솟값

 */

 function solution(s) {
  const arr = s.split(' ')
  // 방법 1
  // return [Math.max(...arr),Math.min(...arr)].join(' ') 

  // 방법 2
  let [max,min] = [0,0]
  for(let i = 0 ; i < arr.length ; i ++){
    if(!i){
      min = max = arr[i] 
    }
    arr[i] = parseInt(arr[i])
    if(min > arr[i]){
      min = arr[i]
    } else if (max < arr[i]){
      max = arr[i]
    }
  }
  return [min,max].join(' ') 
}

// Math객체 안쓰면 점수를 더 받을까 해서 for문 내에서 해결해봤는데 썩 좋은 코드가 아니였나보다..
// 간단하게 Math 사용 하는걸로..😂