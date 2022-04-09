/*
 * https://level.goorm.io/exam/51140/%EA%B0%9C%EA%B5%AC%EB%A6%AC-%EC%86%8C%ED%83%95/quiz/1
 ! 개구리 소탕
 */

/*
    fffrrroooggg -> fffgrrroooggg
    ffffrogrogrog -> all kill
    frogfrogffrogrfrogogg -> g
*/

function removeFrog(input) {
  let text = input.toString();
  let hasFrog = text.indexOf("frog");
  while (hasFrog > -1) {
    text = text.replace(/frog/g, "");
    hasFrog = text.indexOf("frog");
  }
  return text ? text : "all kill";
}
