// filter 메서드 활용
function solution(s) {
  let answer;
  answer = s.filter((v, i) => {
    return s.indexOf(v) === i;
    // if (s.indexOf(v) === i) return true;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

// function solution(s) {
//   let answer =[];
//   for (let x of s) {
//     if (answer.indexOf(x) === -1) {
//       answer += x + '\n';
//     }
//   }
//   return answer;
// }

// let str = ["5", "good", "time", "good", "time", "student"];
// console.log(solution(str));

// set 자료구조 활용
// function solution(s) {
//   let answer;
//   answer = Array.from(new Set(str));
//   return answer;
// }

// let str = ["good", "time", "good", "time", "student"];
// console.log(solution(str));
