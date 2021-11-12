// * https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    const newD = d.sort((a, b) => a - b);
    let count = 0;

    for(let i = 0; i < newD.length; i++) {
        budget -= newD[i];
        if(budget < 0) {
            return count;
        } 
        count += 1;
    }
    return count;
}