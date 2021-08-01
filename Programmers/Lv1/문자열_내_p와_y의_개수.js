// 프로그래머스 Lv1
// 문자열 내 p와 y의 개수

// 1
function solution(s) {
  var count_p = 0;
  var count_y = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      count_p++;
    }
    if (s[i] === "y" || s[i] === "Y") {
      count_y++;
    }
  }
  return count_p === count_y ? true : false;
}

//p와 y의 개수가 같으면 true, 다르면 false
//대문자 소문자를 무시하기 때문에
//모두 대문자로 만들거나 소문자로 만들어서도 해결 가능.
//p를 카운팅할 변수 countP , y를 카운팅할 변수 countY를 선언하고 초기값을 0으로 설정한다.
// 문자열의 길이 만큼 반복하면서 문자열의 i번째가 p이면 count_P에 1을 더하고
//y이면 countY에 1을 더한다.
// 반복문이 끝나면 count_p와 count_y를 비교해서 같으면 true 다르면 false를 반환

// 2. toUpperCase()와 split() 메서드 활용
function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
// 문자열을 대문자로 바꾼뒤 split() 활용해
// 특정 구분자로 잘라서 배열로 넣은뒤 배열의 길이를 비교해
// true나 false를 반환

// pPoooyY => ['', '', 'oooYY'] ['P', 'P', 'ooo']
// pyy => ['', 'YY'] ['P', '', '']
// split() : 찾고자 하는 단어가 빈 문자열로 대채되면서 새로운 배열이 만들어짐
