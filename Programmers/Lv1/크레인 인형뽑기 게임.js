// 프로그래머스 Lv1
// 크레인 인형뽑기 게임

// 1
function solution(board, moves) {
  const basket = [];
  let answer = 0;
  moves.forEach(order => {
      const doll = pickup(board, order-1);
      if(doll){
          if(basket[basket.length-1] === doll){
              basket.pop();
              answer +=2;
          }else{
              basket.push(doll);
          }
      }
  });
  return answer;
}

function pickup(board, order){
  for(let i = 0; i < board.length ; i++){
      if(board[i][order] !== 0){
          const doll = board[i][order];
          board[i][order]= 0;
          return doll;
      }
  }
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])); // 4 출력

// 2
function solution(board, moves) {
  var count =0;
  var stack = [];
  for(var i=0;i<moves.length;i++){
    var now = moves[i]-1
      for(var j=0;j<board.length;j++){
        if(board[j][now]!=0){
          if(stack[stack.length-1]===board[j][now]){
            stack.pop();
            count+=2;
          }
          else{
            stack.push(board[j][now])
          }
          board[j][now] = 0;
          break;
        }
      }
  }
  console.log(stack)
  return count
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4])); // 4 출력