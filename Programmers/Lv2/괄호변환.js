// (()))( = 균형잡힌 괄호 문자열 != 올바른 괄호 문자열
// (()) = 올바른 괄호 문자열 = 균형잡힌 괄호 문자열
function solution(p) {
  // 1단계
  var answer = '';
  if (p === '')
    return p; // 빈 문자열 반환

  let cnt = 0;
  let u = ''; // 균형잡힌 괄호 문자열 u
  let v = ''; // 균형잡힌 괄호 문자열 v

  //2단계
  for (let i = 0; i < p.length; i++) {
    p[i] === '(' ? cnt++ : cnt--;

    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1, p.length);

      break;
    }
  }

  // 3단계, 4단계
  for (let j = 0; j < u.length; j++) {
    u[j] === '(' ? cnt++ : cnt--; // 문자열 

    // 4. u가 올바른 괄호 문자열이 아닌 경우
    if (cnt < 0) {
      let str = '';
      str += '(' + solution(v) + ')'; // 4-1, 4-2, 4-3

      // 4-4. u의 첫번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙인다.
      for (let k = 1; k < u.length - 1; k++) {
        if (u[k] === "(")
          str += ")";
        else
          str += "(";
      }

      return str; // 4-5. 생성된 문자열 반환
    }
  }

  // 3. u가 올바른 괄호 문자열인 경우(문자열 v에 대해 1단계부터 다시 수행) 
  return u + solution(v); // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환한다.
}
// s= (())((()))
// u= (()), v=()(())

// s1 = v = ()(())
// u1 = (), v1=(())