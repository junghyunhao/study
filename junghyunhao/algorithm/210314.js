/**
 *
 *
 *
 */
function solution(A, K) {
  // 먼저 들어온 배열의 마지막 index 를 배열의 제일앞에 추가해주고 해당 값을 빼주어야 하기 때문에 배열의 길이를 구한다.( `.length`로 변수에 지정해주는것이 나중에 for loop을 돌거나 할때도 효율적이게 작동한다. 매번 length를 구하지 않아도 되기 때문에! 물론 이번 경우에는 `.length`로 loop을 돌지 않기 때문에 크게 차이는 없다
  const length = A.length;
  // 제일 먼저 빼줄 인덱스를 length-1으로서 제일 마지막 인덱스로 지정한다.
  const index = length - 1,
    whileCondition = 0;
  // K만큼 빼주고 더해주고를 반복해야 하므로 initial 값을 0으로 지정해주고 K 보다 작을때까지 while loop을 돌면서 해당 인덱스 값을 배열의 제일앞에 넣어주고, .pop()을 통해 마지막 배열 값을 제거한다.
  while (whileCondition++ < K) {
    A.unshift(A[index]);
    A.pop();
  }
  return A;
}

// solution([1,2,3,4,5],2) // [ 4, 5, 1, 2, 3 ]
