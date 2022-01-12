// 프로그래머스 Lv2
// 문자열압축

function solution(s) {
  let count = 1;
  let result_count = [];

  for (let i = 1; i <= s.length; i++) {
    let result = "";
    for (let j = 0; j < s.length; j += i) {
      let str = s.substr(j, i);
      let nextstr = s.substr(j + i, i);

      if (str === nextstr) count++;
      else {
        if (count === 1) result = result + str;
        else {
          result = result = result + count + str;
        }
        count = 1;
      }
    }
    result_count.push(result.length);
  }
  answer = Math.min.apply(null, result_count);

  return answer;

}
