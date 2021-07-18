// 프로그래머스 Lv1
// K번째 수

// 1
function solution(array, commands) {
  var answer = [];
  let i = 0;
  let j = 0;
  let k = 0;
  for (let m = 0; m < commands.length; m++) {
      i = commands[m][0]
      j = commands[m][1]
      k = commands[m][2]
      
      let sliced = array.slice(i-1, j)
      let sorted = sliced.sort((a,b)=> a - b) // 오름차순 정렬
  
      answer.push(sorted[k-1])
  }
  return answer;
}

console.log(solution([1,5,2,6,3,7,4],[[2,5,3],[4,4,1],[1,7,3]])); // [5,6,3]

// 2
function solution(array, commands) {
    const answer = [];
    commands.forEach(command => {
        const tmp = array.slice(command[0] - 1, command[1]);
        tmp.sort((a,b)=>a-b);
        answer.push(tmp[command[2] - 1]);
    });  
    return answer;

}

console.log(solution([1,5,2,6,3,7,4],[[2,5,3],[4,4,1],[1,7,3]])); // [5,6,3]
