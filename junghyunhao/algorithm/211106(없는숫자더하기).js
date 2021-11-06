function addNumbersNotInArray(array) {
  const allNumberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let answerArr = [];
  const sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < allNumberArr.length; i++) {
    if (!sortedArray.includes(allNumberArr[i])) {
      answerArr.push(allNumberArr[i]);
    }
  }
  const answerNum = answerArr.reduce((a, b) => a + b);
  return answerNum;
}
