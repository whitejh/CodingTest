// 프로그래머스 Lv2
// 영어 끝말잇기

function solution(n, words) {
  var answer = [0, 0];
  var usedWords = []          // 이미 사용한 단어를 넣을 배열
  usedWords.push(words[0])    // 1번 플레이어부터 시작

  for (let i = 1; i < words.length; i++) {
    var beforeWord = words[i - 1]
    var currentWord = words[i]

    // 이전단어의 맨 뒷글자와 현재단어의 맨 앞글자가 같고
    // 이전에 사용한적이 없는 단어라면 (indexOf로 배열 중복요소 여부 검사)
    if (beforeWord[beforeWord.length - 1] == currentWord[0]
      && usedWords.indexOf(currentWord) == -1) {
      usedWords.push(currentWord) // 계속 게임을 진행
    } else {
      // 그게 아니라면 몇번째 턴인지, 몇번째 플레이어 인지 계산해서 리턴해준다.
      var player = i % n + 1
      var turn = parseInt(i / n) + 1

      return answer = [player, turn]
    }
  }
  return answer;
}