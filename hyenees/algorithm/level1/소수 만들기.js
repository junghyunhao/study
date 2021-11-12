// * https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

function solution (arr) {
    // 조합 구하기
    function getCombinations (arr, selectNumber) {
      const results = [];

      if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

      arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기

        results.push(...attached); // 배열 spread syntax 로 모두다 push
      });
     return results
    }

    const sumArr = getCombinations(arr,3).map(r=> r.reduce((a,b)=>a+b))

    function isPrime(num) {
      let result = false;
      if(num === 2){
        return true;    
      }

      // 제곱근보다 작은수로 나눴을 때 나머지가 0이 아닌 경우 소수
      // 제곱근보다 작은수로 나눈 값과 큰 수로 나눈 값은 제곱근을 기준으로 대칭을 이루기 때문에 제곱근보다 작은수만으로 판별이 가능하다.
      for(let i = 2; i<=Math.floor(Math.sqrt(num)); i++){
        if(num % i === 0){
          result = false;
          break;
        }else result = true;
      }
      return result;
    }

    return sumArr.filter(v=> isPrime(v)).length

}