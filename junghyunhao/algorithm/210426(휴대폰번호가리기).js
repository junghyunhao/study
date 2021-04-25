/**
 *
 * https://programmers.co.kr/learn/courses/30/lessons/12948
 */
function solution(phone_number) {
  const phoneNumLength = phone_number.length;
  if (phoneNumLength < 4 || phoneNumLength > 20) {
    return null;
  }
  const lastFourDigit = phone_number.slice(phoneNumLength - 4);
  const starString = "*".repeat(phoneNumLength - 4);
  return starString + lastFourDigit;
}

/**
 *
 * 정규식 예시
 */
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
