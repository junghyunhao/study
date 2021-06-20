//https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
	let answer = '';

	//key의 좌표를 찾기 위한 2차원 배열 생성
	const keyArr = [
		['*', 0, '#'],
		[7, 8, 9],
		[4, 5, 6],
		[1, 2, 3],
	];

	//key의 좌표를 찾는 함수
	const findIndex = (num) => {
		for (let i = 0; i < keyArr.length; i++) {
			for (let j = 0; j < keyArr[i].length; j++) {
				if (keyArr[i][j] === num) {
					return [i, j];
				}
			}
		}
	};

	//왼쪽,오른쪽 엄지의 현재 좌표 위치
	let leftState = findIndex('*');
	let rightState = findIndex('#');

	for (let i = 0; i < numbers.length; i++) {
		const leftDefaultArr = [1, 4, 7];
		const rightDefaultArr = [3, 6, 9];

		//선택된 번호의 좌표 위치
		let selectState = findIndex(numbers[i]);

		//왼쪽,오른쪽 엄지 위치에서 선택된 번호까지의 거리
		let leftPower = Math.abs(leftState[0] - selectState[0]) + Math.abs(leftState[1] - selectState[1]);
		let rightPower = Math.abs(rightState[0] - selectState[0]) + Math.abs(rightState[1] - selectState[1]);

		if (leftDefaultArr.includes(numbers[i])) {
			//1,4,7이 선택되면 무조건 왼쪽 엄지를 사용
			answer += 'L';
			leftState = findIndex(numbers[i]);
		} else if (rightDefaultArr.includes(numbers[i])) {
			//3,6,9가 선택되면 무조건 오른쪽 엄지를 사용
			answer += 'R';
			rightState = findIndex(numbers[i]);
		} else {
			//2,5,8,0이 선택된 경우
			if (leftPower === rightPower) {
				//왼쪽과 오른쪽 엄지의 위치가 선택된 번호의 거리가 같을 경우
				if (hand === 'right') {
					answer += 'R';
					rightState = findIndex(numbers[i]);
				} else {
					answer += 'L';
					leftState = findIndex(numbers[i]);
				}
			} else {
				//거리가 가까운 거리의 엄지를 사용한다.
				if (leftPower > rightPower) {
					answer += 'R';
					rightState = findIndex(numbers[i]);
				} else {
					answer += 'L';
					leftState = findIndex(numbers[i]);
				}
			}
		}
	}

	return answer;
}
