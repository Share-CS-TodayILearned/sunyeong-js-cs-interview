// 약수의 합
function solution(n) {
    var answer = 0;
    
    for(let i = 1 ; i<=n ; i++ ){
        if(n%i===0){
            answer+=i
        }
    }
    console.log('answer',answer);

    return answer;
}


solution(10)