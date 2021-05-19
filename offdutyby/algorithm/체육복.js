// https://programmers.co.kr/learn/courses/30/lessons/42862
// 체육복

function solution(n, lost, reserve) {
	var answer = 0;
	var preLost = lost;
	var preReserve = reserve;

	for (let i = 0; i < preLost.length; i++) {
		if (preReserve.includes(preLost[i])) {
			reserve = reserve.filter((el) => el !== preLost[i]);
			lost = lost.filter((el) => el !== preLost[i]);
		}
	}

	if (reserve.length === 0) {
		answer = n - lost.length;
	} else {
		answer = n - lost.length;

		for (let i = 0; i < lost.length; i++) {
			if (reserve.includes(lost[i] - 1)) {
				reserve = reserve.filter((el) => el !== lost[i] - 1);
				answer++;
			} else if (reserve.includes(lost[i] + 1)) {
				reserve = reserve.filter((el) => el !== lost[i] + 1);
				answer++;
			}
		}
	}

	return answer;
}
