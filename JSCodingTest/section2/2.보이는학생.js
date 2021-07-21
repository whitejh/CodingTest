// 1차원 배열 탐색 & 최댓값 활용

// 1
function solution(arr) {
    let answer = 0, max = arr[0];//max = Number.MIN_SAFE_INTEGER; 

    for (i of arr) {
        if (i > max) {
            max = i;
            answer++;
        }
    }

    return answer;
}

const input = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(input));

//2
function solution(arr) {
    let answer = 0, max = arr[0];//max = Number.MIN_SAFE_INTEGER; 

    for(let i = 1;i < arr.length;i++){
      if(arr[i] > max) {
        answer++;
        max = arr[i];
        
      }
    }

    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));



