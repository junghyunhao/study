// * https://programmers.co.kr/learn/courses/30/lessons/1845

function solution (nums) {
    const arr = [];
    for(let i=0; i<nums.length; i++){
      if(arr.length >= nums.length / 2){
        break;
      }
      if(arr.includes(nums[i])){
        continue;
      }
      arr.push(nums[i]);
    }
    return arr.length;
  }

  // ! [...new Set(array)] - 중복없는 배열을 만들 수 있다. 자료형에 관계없이 원시값, 참조값 모두 유일한 값을 저장할 수 있다.