// https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
	return absolutes.reduce((acc, cur, idx) => (signs[idx] ? acc + cur : acc - cur), 0);
}
