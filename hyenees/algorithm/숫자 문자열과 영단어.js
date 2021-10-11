// * https://programmers.co.kr/learn/courses/30/lessons/81301

function solution (s){
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
  for(let i=0; i<numbers.length; i++){
    if(s.indexOf(numbers[i]) !== -1){
      var reg = new RegExp(numbers[i], "gi")
      s = s.replace(reg, i)
    }
  }
  
  return +s
}

// * 다른 풀이

for(let i=0; i< numbers.length; i++) {
  let arr = answer.split(numbers[i]);
  answer = arr.join(i);
}
