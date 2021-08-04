// // 프로그래머스 Lv1
// // 키패드 누르기

// // 1. 그래프 좌표값 구하는 방식
// function solution(numbers, hand) {
//   var answer = "";

//   //객체 배열 이용
//   //키패드 위치에 따라 좌표 정보를 세팅
//   let list = {
//     1: [0, 0],
//     2: [0, 1],
//     3: [0, 2],
//     4: [1, 0],
//     5: [1, 1],
//     6: [1, 2],
//     7: [2, 0],
//     8: [2, 1],
//     9: [2, 2],
//     "*": [3, 0],
//     0: [3, 1],
//     "#": [3, 2],
//   };
//   //초기 손가락 위치
//   let left = list["*"]; // [3,0]
//   let right = list["#"]; // [3,2]

//   //입력 numbers만큼 반복
//   for (let x of numbers) {
//     let [i, j] = list[x]; //입력 숫자위치 i,j에 저장

//     //j값이 0이라면 왼쪽 손가락으로만 사용
//     if (j === 0) {
//       answer += "L";
//       left = list[x];
//     }
//     //j값이 2이라면 오른쪽 손가락으로만 사용
//     else if (j === 2) {
//       answer += "R";
//       right = list[x];
//     } //가운데일 경우
//     else {
//       //왼쪽 손가락 위치와 현재 i,j의 떨어진 거리 계산(절대값 이용)
//       let disL = Math.abs(i - left[0]) + Math.abs(j - left[1]);
//       //오른쪽 손가락 위치와 현자 i,j의 떨어진 거리 계산(절대값 이용)
//       let disR = Math.abs(i - right[0]) + Math.abs(j - right[1]);

//       //떨어진 거리가 더 가까운 경우를 판별해서
//       //해당 손가락으로 사용
//       if (disL > disR) {
//         right = list[x];
//         answer += "R";
//       } else if (disL < disR) {
//         left = list[x];
//         answer += "L";

//         //떨어진 거리가 왼쪽 오른쪽 같은 경우
//       } else if (disL === disR) {
//         //왼손잡이라면 왼쪽 이용 ("left")
//         if (hand === "left") {
//           left = list[x];
//           answer += "L";
//         }
//         //오른손잡이일 경우 ("right")
//         else {
//           right = list[x];
//           answer += "R";
//         }
//       }
//     }
//   }
//   return answer;
// }

function solution(numbers, hand) {
  let answer = "";

  let left = [1, 4, 7];
  let right = [3, 6, 9];
  let center = [2, 5, 8, 0];

  let left_finger = [3, 0];
  let right_finger = [3, 2];

  numbers.map((number) => {
    if (left.includes(number)) {
      answer += "L";
      left_finger = [left.indexOf(number), 0];
    } else if (right.includes(number)) {
      answer += "R";
      right_finger = [right.indexOf(number), 2];
    } else {
      let push_a = [center.indexOf(number), 1];

      let distance_left =
        Math.abs(push_a[0] - left_finger[0]) +
        Math.abs(push_a[1] - left_finger[1]);
      let distance_right =
        Math.abs(push_a[0] - right_finger[0]) +
        Math.abs(push_a[1] - right_finger[1]);

      if (distance_left < distance_right) {
        answer += "L";
        left_finger = push_a;
      } else if (distance_left > distance_right) {
        answer += "R";
        right_finger = push_a;
      } else {
        if (hand === "left") {
          answer += "L";
          left_finger = push_a;
        } else {
          answer += "R";
          right_finger = push_a;
        }
      }
    }
  });

  return answer;
}
