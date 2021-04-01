/**
 *
 * 난쟁이 찾기 - 일곱명의 난쟁이인데 두명의 가짜 난쟁이가 있다. 힌트는 일곱명의 난쟁이의 키를 다 합하면 100이 된다.
 * 여기서 가짜 난쟁이 둘을 색출하라총합이 100을 만들고 나머지를 return 하라
 */
function findDwarf(arr) {
  const sumArr = arr.reduce((acc, cur) => acc + cur, 0);
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (sumArr - (arr[i] + arr[j]) === 100) {
        return [arr[i], arr[j]];
      }
    }
  }
}
const array = [20, 7, 23, 19, 15, 10, 25, 8, 13];
findDwarf(array);
