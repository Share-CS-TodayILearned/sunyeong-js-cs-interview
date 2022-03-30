
function solution(numbers, hand) {
    var answer = '';
    const phoneNumbers =[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*',0,'#']
    ];
    let leftHand = '*';
    let rightHand = '#';

    numbers.forEach((num,i)=>{
        if(num===1 || num===4 || num===7){
            leftHand=num;
            answer = answer + 'L';
        }else if(num === 3 || num === 6 || num === 9){
            rightHand=num;
            answer = answer + 'R';
        }else{
            let numCoordinate=[];
            let leftCoordinate=[];
            let rightCoordinate=[];
            phoneNumbers.forEach((e,leftIndex)=>{
                e.forEach((e,rightIndex)=>{
                    if(e ===num){
                        numCoordinate.push(leftIndex, rightIndex)
                    }
                    if(e === leftHand){
                        leftCoordinate.push(leftIndex, rightIndex)
                    }
                    if(e === rightHand){
                        rightCoordinate.push(leftIndex, rightIndex)
                    }
                    
                })
            })
            if(Math.abs(numCoordinate[0]-leftCoordinate[0])+Math.abs(numCoordinate[1]-leftCoordinate[1])>
            Math.abs(numCoordinate[0]-rightCoordinate[0])+Math.abs(numCoordinate[1]-rightCoordinate[1])){
                rightHand=num;
                answer = answer + 'R';
            }else if(Math.abs(numCoordinate[0]-leftCoordinate[0])+Math.abs(numCoordinate[1]-leftCoordinate[1])<
            Math.abs(numCoordinate[0]-rightCoordinate[0])+Math.abs(numCoordinate[1]-rightCoordinate[1])){
                leftHand=num;
                answer = answer + 'L';
            }else{
                if(hand==='right'){
                    rightHand=num;
                    answer = answer + 'R';
                }else{
                    leftHand=num;
                    answer = answer + 'L';
                }
            }
        }
    })
        
    return answer;
}


/*
진짜 어거지로 푼거 같음 다른 사람 풀이 보고 다른 풀이 방법 생각해볼 수 있도록 공부해야겠음 중복되는 코드가 많음
function solution(numbers, hand) {
    var answer = '';
    const phoneNumbers =[
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*',0,'#']
    ];
    let leftHand = '*';
    let rightHand = '#';

    numbers.forEach((num,i)=>{
        console.log('순서', i+1,  '번째이고  숫자',num)
        if(num===1 || num===4 || num===7){
            leftHand=num;
            answer = answer + 'L';
        }else if(num === 3 || num === 6 || num === 9){
            rightHand=num;
            answer = answer + 'R';
        }else{
            let numCoordinate=[];
            let leftCoordinate=[];
            let rightCoordinate=[];
            phoneNumbers.forEach((e,leftIndex)=>{
                e.forEach((e,rightIndex)=>{
                    console.log('반복문 내 숫자', e)
                    if(e ===num){
                        console.log('num', num)
                        console.log('leftIndex', leftIndex)
                        console.log('rightIndex', rightIndex)
                        numCoordinate.push(leftIndex, rightIndex)
                    }
                    if(e === leftHand){
                        console.log('왼손위치 찾기')
                        console.log('leftHand', leftHand)
                        console.log('leftIndex', leftIndex)
                        console.log('rightIndex', rightIndex)
                        leftCoordinate.push(leftIndex, rightIndex)
                    }
                    if(e === rightHand){
                        console.log('오른손위치 찾기')
                        console.log('rightHand', rightHand)
                        console.log('leftIndex', leftIndex)
                        console.log('rightIndex', rightIndex)
                        rightCoordinate.push(leftIndex, rightIndex)
                    }
                    
                })
            })
            console.log('numCoordinate,',numCoordinate)
            console.log('leftCoordinate,',leftCoordinate)
            console.log('rightCoordinate,',rightCoordinate)
            console.log('순서가 끝났음');
            console.log('왼손 거리',Math.abs(numCoordinate[0]-leftCoordinate[0])+Math.abs(numCoordinate[1]-leftCoordinate[1]));
            console.log('오른손 거리',Math.abs(numCoordinate[0]-rightCoordinate[0])+Math.abs(numCoordinate[1]-rightCoordinate[1]));
            if(Math.abs(numCoordinate[0]-leftCoordinate[0])+Math.abs(numCoordinate[1]-leftCoordinate[1])>
            Math.abs(numCoordinate[0]-rightCoordinate[0])+Math.abs(numCoordinate[1]-rightCoordinate[1])){
                console.log('왼손이 더 멀다');
                rightHand=num;
                answer = answer + 'R';
            }else if(Math.abs(numCoordinate[0]-leftCoordinate[0])+Math.abs(numCoordinate[1]-leftCoordinate[1])<
            Math.abs(numCoordinate[0]-rightCoordinate[0])+Math.abs(numCoordinate[1]-rightCoordinate[1])){
                console.log('오른손이 더 멀다');
                leftHand=num;
                answer = answer + 'L';
            }else{
                if(hand==='right'){
                    rightHand=num;
                    answer = answer + 'R';
                }else{
                    leftHand=num;
                    answer = answer + 'L';
                }
            }
        }
    })
    console.log('answer : ', answer)
        
    return answer;
}

let a=[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// 1  *  #  L
// 3  1  #  LR
// 4  1  3  LRL
// 5  4  3  LRLL
// 8  5  3  LRLLL
// "LRLLLRLLRRL"
console.log(solution(a,'right'))
*/