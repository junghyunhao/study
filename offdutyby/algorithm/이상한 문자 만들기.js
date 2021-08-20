// https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
	let arr = s.split(' ');
	let pre = '';

	for (let i = 0; i < arr.length; i++) {
		if (i !== 0) {
			pre += ' ';
		}

		for (let j = 0; j < arr[i].length; j++) {
			if (j % 2 === 0) {
				pre += arr[i][j].toUpperCase();
			} else {
				pre += arr[i][j].toLowerCase();
			}
		}
	}
	return pre;
}
