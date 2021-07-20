// 프로그래머스 Lv1
// 숫자 문자열과 영단어

// 1
function solution(lottos, win_nums) {
    var answer = [];
    var max=0;
    var min=0;
    for(let i of lottos) {
        if(win_nums.includes(i)){
            min+=1;
        }
        if(i===0){
            max+=1;
        }
    }
    max+=min;
    
    var first=0, second=0;;
    
    switch(max) {
        case 6:
            first=1;
            break;
        case 5:
            first=2;
            break;
        case 4:
            first=3;
            break;
        case 3:
            first=4;
            break;
        case 2:
            first=5;
            break;
        default:
            first=6;    
    }
    
    switch(min) {
        case 6:
            second=1;
            break;
        case 5:
            second=2;
            break;
        case 4:
            second=3;
            break;
        case 3:
            second=4;
            break;
        case 2:
            second=5;
            break;
        default:
            second=6;    
    }
    answer.push(first,second);
    
    return answer;
}

// 2
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}