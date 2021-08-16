/**
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 * @param {*} array 
 * @param {*} commands 
 * @returns 
 */
function solution(array, commands) {
    let answer = [];
   commands.map((arr) => {
      const firstValueOfArray = arr[0]-1 < 0 ? 0:  arr[0]-1
     const value = array.slice(firstValueOfArray,arr[1]).sort((a,b)=> a-b)[arr[2]-1]
       answer.push(value)
    })                         
    return answer;
}