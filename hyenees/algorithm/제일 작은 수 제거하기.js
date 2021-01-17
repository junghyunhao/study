// * https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

function solution(arr){
    var answer = [];
    if(arr.length===1){
      answer.push(-1);
    }
   const min = Math.min.apply(null,arr);
    for(let i=0; i<arr.length; i++){
      if(arr[i]!==min){
        answer.push(arr[i]);
      }
    }
    return answer;
}

// ! splice(index, deleteCount)

var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]