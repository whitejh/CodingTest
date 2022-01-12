// 프로그래머스 Lv2
// 메뉴 리뉴얼

function powerSet(array) {  // 멱집합; powerSet
  function fork(i, t) {
    if (i === array.length) {
      result.push(t);
      return;
    }
    fork(i + 1, t.concat([array[i]]));
    fork(i + 1, t);
    console.log(t);
  }

  var result = [];
  fork(0, []);
  result.pop();
  return result;
}

function solution(orders, course) {
  var answer = [];
  var menu = {};
  var dict = {};

  for (var w in orders) {
    orders[w] = orders[w].split('').sort().join('');
  } // 오름차순 정렬만 함.

  for (var i = 0; i < orders.length; i++) {
    var test = powerSet(orders[i]);
    for (var key in test) {
      menu[test[key]] = (menu[test[key]] || 0) + 1;
    }
  }
  for (var key in menu) {
    var a = key.split(',').join('');
    for (var j = 0; j < course.length; j++) {
      if (a.length == course[j]) {
        dict[a] = menu[key];
      }
    }
  }

  menu = dict;

  for (var i = 0; i < course.length; i++) {
    var m = 0;
    for (var key in menu) {
      if (course[i] === key.length) {
        m = Math.max(menu[key], m)
      }
    }
    for (var key in menu) {
      if (course[i] === key.length) {
        if (menu[key] === m && m !== 1) {
          answer.push(key);
        }
      }
    }
  }
  return answer.sort();
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));