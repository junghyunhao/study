function solution(num) {
	let answer = num;
	let count = 0;

	while (answer !== 1) {
		if (count > 500) {
			return -1;
		}

		if (answer % 2 === 0) {
			answer = answer / 2;
			count += 1;
		} else if (answer % 2 === 1) {
			answer = answer * 3 + 1;
			count += 1;
		}
	}
	return count;
}
