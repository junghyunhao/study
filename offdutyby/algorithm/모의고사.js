function solution(answers) {
	let answer = [];

	//참가자 각자의 답변 form

	let formA = [1, 2, 3, 4, 5];
	let formB = [2, 1, 2, 3, 2, 4, 2, 5];
	let formC = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	//각 참가자의 답변과 정답 비교 => 필터링된 배열의 개수 === 각 참가자의 정답 개수

	let resultA = answers.filter((a, i) => a === formA[i % formA.length]).length;
	let resultB = answers.filter((a, i) => a === formB[i % formB.length]).length;
	let resultC = answers.filter((a, i) => a === formC[i % formC.length]).length;

	// 정답자 최대 점수 산출

	let max = Math.max(resultA, resultB, resultC);

	// 최대 점수와 같을경우 answer 배열에 push

	if (resultA === max) {
		answer.push(1);
	}
	if (resultB === max) {
		answer.push(2);
	}
	if (resultC === max) {
		answer.push(3);
	}

	return answer;
}
