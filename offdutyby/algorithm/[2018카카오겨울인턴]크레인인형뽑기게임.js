/**
 * https://programmers.co.kr/learn/courses/30/lessons/64061
 * ? 2018카카오겨울인턴, 크레인인형뽑기게임
 */

function solution(board, moves) {
	let answer = 0;
	let resultArr = [];

	for (let i = 0; i < moves.length; i++) {
		let targetPosition = moves[i] - 1;
		let targetDoll = 0;

		for (let j = 0; j < board.length; j++) {
			if (board[j][targetPosition] !== 0) {
				// resultArr.push(board[j][targetPosition]);
				targetDoll = board[j][targetPosition];
				board[j][targetPosition] = 0;
				break;
			}
		}
		if (targetDoll !== 0) {
			resultArr.push(targetDoll);
			if (resultArr.length > 1 && resultArr[resultArr.length - 1] === resultArr[resultArr.length - 2]) {
				answer += 2;
				resultArr.pop();
				resultArr.pop();
			}
		}
	}

	return answer;
}
