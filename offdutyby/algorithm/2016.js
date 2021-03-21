/**
 * https://programmers.co.kr/learn/courses/30/lessons/12901
 * ? 2016
 */

function solution(a, b) {
	var answer = '';
	let date = `2016-${a}-${b}`;
	let setDate = new Date(date);
	let intDay = setDate.getDay();

	if (intDay === 0) {
		answer = 'SUN';
	} else if (intDay === 1) {
		answer = 'MON';
	} else if (intDay === 2) {
		answer = 'TUE';
	} else if (intDay === 3) {
		answer = 'WED';
	} else if (intDay === 4) {
		answer = 'THU';
	} else if (intDay === 5) {
		answer = 'FRI';
	} else if (intDay === 6) {
		answer = 'SAT';
	}

	return answer;
}
