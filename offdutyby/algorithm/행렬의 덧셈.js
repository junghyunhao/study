// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
	var answer = [];
	for (let i = 0; i < arr1.length; i++) {
		let resArr = [];

		for (let j = 0; j < arr1[i].length; j++) {
			let sum = arr1[i][j] + arr2[i][j];
			resArr.push(sum);
		}

		answer.push(resArr);
	}
	return answer;
}
