// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
	var answer = [];

	answer = arr.filter((el, index) => el != arr[index + 1]);

	return answer;
}
