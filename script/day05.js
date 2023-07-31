// let a = 10 //숫자데이터
// let b ='10' //문자데이터
// let total = a+b //숫자+문자=문자
// //암시적 형변환(자바스크립트 자동으로 데이터변환(기본))
// console.log(`total >> ${total}`) //1010
// console.log(`${typeof(a)}+${typeof(b)}=${typeof(a+b)}`) //number+string=string
// console.log('-----------------------------------------------')
// //명시적 형변환(문자>숫자, 숫자>문자), 개발자가 직접 데이터형식 결정
// console.log(`b=${typeof(b)}, b+1=${b+1}`) //b=string, b+1=101
// //Number() == 형변환 메서드
// //괄호 안에 작성한 데이터를 숫자 데이터로 변환한다.
// //메서드를 사용할 때만 일회성으로 숫자데이터로 인식한다.
// //일회성의 불편함을 해소하기 위해 변환한 데이터를 다른 변수에 대입해서 일반적으로 사용한다.
// console.log(`b=${typeof(Number(b))}, ${typeof(b)}`) //b=number, string
// let c = Number(b)
// console.log(`c=${typeof(c)}, c=${c}, a+c=${a+c}`) //c=number, c=10, a+c=20
// console.log('--------------------------------------------')
// // const d =Number(window.prompt('1+1=?'))
// console.log(`d=${d}, ${typeof(d)}`)
//Number메서드는 객체없이 사용가능하다.
//그래서 다른 메서드를 괄호안에 넣어 사용할 수 있다.
//예) Nember(객체.메서드())
// console.log('-----------------------------------------------')
// const userInput = document.querySelector('#user')
// const resultBtn = document.querySelector('#result')
// console.log(userInput, resultBtn) //DOM*2 출력
//동작 이벤트 없이 input의 값 확인은 초기값만 인식한다.
//input.value 값은 숫자데이터로 입력해도 문자데이터로 자동 암시적 형변환이 된다.
// userInput.value = 1234 //초기값 대입
// console.log(`userInput typeof = ${typeof(userInput.value)}`) //userInput typeof = string
// console.log(`userInput value = ${userInput.value}`) //userInput value = 1234
// let userInputNumber = Number(userInput.value) //숫자로 형변환한 userInput값
// console.log(`userInputNumber type = ${typeof(userInputNumber)}`) //userInputNumber type = number
// console.log(`userInputNumber value = ${userInputNumber}`) //userInputNumber value = 1234
// //버튼 클릭 기준 input의 현재값을 파악 후 결과 출력하기
// resultBtn.addEventListener('click',function(){
//     userInputNumber = Number(userInput.value)
//     console.log(`userInputNumber type = ${typeof(userInputNumber)}`)
//     console.log(`userInputNumber value = ${userInputNumber}`)
//     //버튼 클릭 시 input값에 +1 결과 콘솔 출력하기
//     console.log(userInputNumber + 1)
// })

//구구단 과제 풀이
console.log('-------------------------------------')
const dan2 = document.querySelector('#dan2')//2단 고정 input
const calc = document.querySelector('#calc')//계산식
const result = document.querySelector('#result')//결과출력input
console.log(dan2, calc, result)
console.log(typeof(dan2.value), typeof(calc.value)) //str, str
console.log(`2*2=${'2'*'2'}, 2+2=${'2'+'2'}`)
//연산자 좌우 피연산자가 문자데이터일 경우
//더하기연산자(+) 라면 문자+문자=문자로 연결결과로 보여준다.
//나머지연산자 (-,*,/,%) >> 문자를 암시적형변환으로 자동으로
//숫자 데이터로 변경해서 문자*문자=숫자 결과로 보여준다.
const test = document.querySelector('#test')
test.addEventListener('click',function(){
    let = first = Number(dan2.value)
    let = last = Number(calc.value)
    console.log(first, last, first*last)
    result.value = first*last
})
