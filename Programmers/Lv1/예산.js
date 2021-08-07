// 프로그래머스 Lv1
// 예산

// 1
function solution(d, budget) {
    let answer = 0;
    let sum = 0;
    
    d.sort((a,b) => a-b);
    
    for(let i=0; i < d.length; i++) {
        answer++;
        sum += d[i];
        if(sum > budget) {
          answer--;
          break;
        }
    }
    return answer;
}

//2. d.length를 값으로 출력하는 다른 풀이
function solution(d, budget) {
    var count = 0;
    var sum = 0;
    d.sort((a,b) => a-b);

    for(var i=0; i < d.length; i++) {
        sum += d[i];
        count = d.length;
        if(sum > budget) {
            count = i;
            break;
        }
    }
    return count;
}
//d 배열을 오름차순으로 정렬한 뒤, 
// d[0]~d[d.length-1]의 순차적 합이 budget보다 클 경우: index값 출력
// 같거나 작을 경우: d.length 반환

//3. d.reduce()와 d.length를 이용한 풀이
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

console.log(solution([1,3,2,5,4],9)); // 3 출력
console.log(solution([2,2,3,3],10));  // 4 출력


