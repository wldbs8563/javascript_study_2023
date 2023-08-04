//반복문 for
/*
    for(반복문변수생성; 변수활용조건식; 변수증감식){
        반복문 변숙 조건이 참일 때 반복실행문
    }반복문 변수 조건이 거짓일 때 for 끝나는 위치
*/
//1~10까지 반복하는 반복문
//for에서 자주 이용하는 지역변수명  = i, j, m, n, k
for(let i =0; i<11; i++){
    console.log('hello js' +(i+1))//(i+1)i는 0이지만 1부터시작
}
console.log('--------------------------------')
//0~5 반복문
for(let j = 0; j<=5; j++){
    console.log('반복문'+j)
}
console.log('--------------------------------')
//5~0 반복문
for(let m=5; m>=0; m--){
    console.log(m)
}
console.log('--------------------------------')
//10~30 반복문, 홀수만 반복 출력
for(let n=10; n<=30; n++){
    if(n%2 === 1){
        console.log(n)
    }
}
console.log('--------------------------------')
//DOM, 배열 사용하는 반복문
const study = ['html', 'css', 'javascript','figma', 'photoshop','illustrator']
//객체의 수 length 속성
//1.html 공부
//2.css 공부
//3.javascript 공부
//4.figma 공부
//5.photoshop 공부
//6.illustrator 공부
console.log(study[0])
console.log(study[1])
console.log(study[2])
//객체의 수 length 속성
for(let i=0; i<study.length; i++){//객체는 0부터 시작 length는 1부터 시작하기 때문에 -1을 붙이거나 <=가 아닌 <을 사용해서 undefined가 나오지 않도록 한다
    console.log(`${i+1}. ${study[i]} 공부`)
}
console.log('--------------------------------')
//위 study 배열을 역순으로 출력하기
for(let i=study.length-1; i>=0; i--){
    console.log(`${i+1}. ${study[i]} 공부`)
}
console.log('--------------------------------')
//반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')
//반복문 이용 coffee배열 모두 출력
for(let i=0; i<coffee.length; i++ ){
    console.log(coffee[i])
}