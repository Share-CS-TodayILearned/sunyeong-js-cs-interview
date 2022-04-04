// k 번째 수

function solution(array, commands) {
    let result=[];
   
    for(let i = 0; i<commands.length; i++){
        let list = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)
        result.push(list[commands[i][2]-1])
    }
    return result;
}


solution(	[1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])

// sort()는 인자가 없을 경우 문자열로 형변환후 정렬을 실행하므로 인자를 넣어줘야 한다.
console.log([10,1,11, 5, 2, 6, 3, 7, 4].sort()) //[1, 10, 11, 2, 3, 4, 5, 6, 7]
console.log([10,1,11, 5, 2, 6, 3, 7, 4].sort((a,b)=>a-b)) // [1, 2, 3, 4, 5, 6, 7, 10, 11]

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort