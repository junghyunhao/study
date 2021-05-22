function solution(a, b) {
	var answer = 0;

	answer = a.reduce((acc, cur, idx) => acc + cur * b[idx], 0);

	return answer;
}
