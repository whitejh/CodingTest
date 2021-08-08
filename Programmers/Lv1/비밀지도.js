// 프로그래머스 Lv1
// 비밀지도

// 1
function solution(n, arr1, arr2) {
  let answer = [];
  let newArr1 = [];
  let newArr2 = [];

  // 2진수로 변환하며 빈 부분은 0으로 채움
  for (let i = 0; i < n; i++) {
    let tempArr1 = [];
    let str1 = arr1[i].toString(2);
    //console.log(str1);

    for (let j = 0; j < n - str1.length; j++)
      tempArr1.push(0);

    for (let j = 0; j < str1.length; j++)
      tempArr1.push(str1[j]);

    newArr1.push(tempArr1);

    let tempArr2 = [];
    let str2 = arr2[i].toString(2);
    //console.log(str2);

    for (let j = 0; j < n - str2.length; j++)
      tempArr2.push(0);

    for (let j = 0; j < str2.length; j++)
      tempArr2.push(str2[j]);

    newArr2.push(tempArr2);
  }

  // 겹쳤을 때 1인 부분은 # 0인 부분은 공백으로 둠
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (newArr1[i][j] === '1' || newArr2[i][j] === '1') {
        str += '#';
      } else {
        str += ' ';
      }
    }
    answer.push(str);
  }
  console.log(newArr1, newArr2, answer);
  return answer;
}

// 입력값을 toString(2)을 활용해 2진수로 변환하고 왼쪽에 빈 부분은 0으로 채운다.
// 겹쳤을 때 1인 부분은 #, 0인 부분은 공백으로 둔다.