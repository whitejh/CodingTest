function solution(people, limit) {
  let answer = 0;
  const sortedPeople = people.sort((a, b) => a - b); // 오름차순 정렬
  let start = 0;
  let end = people.length - 1;

  while (start <= end) {
    if (sortedPeople[start] + sortedPeople[end] <= limit) {
      start++;
    }
    end--;
    answer += 1;
  }
  return answer;
}

console.log(solution([70, 50, 80, 50], 100));
console.log(solution([70, 80, 50], 100));

// sort()처럼 이렇게 쓰지말고 sort((a, b) => a - b) 를 명시해주자.
// sort는 배열 안에 있는 내용을 자동으로 string으로 변환 후 유니코드로 정렬된다.
// 그래서 2자리수 이상의 수를 비교할때 callback 함수를 안해주면 제대로 정렬이 되지 않는다.