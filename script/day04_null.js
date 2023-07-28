//null, undefined 데이터타입 차이
//null == 변수의 값을 삭제할 때 사용
//'' == 빈문자열은 DOM문자데이터를 삭제할 때 사용
let a = 10;
console.log(a);
a = null//빈 값을 대입한다 (내용삭제)
console.log(a);
//------------------------------------------------------
const pwd = document.querySelector('#pwd')//비밀번호 입력칸
const sumit = document.querySelector('#sumit')//변경버튼
const reset = document.querySelector('#reset')//초기화버튼
console.log(pwd, sumit, reset);
//사용자가 비밀번호 입력칸에 비밀번호 입력 후
//sumit 버튼 클릭 시 윈도우팝업창으로 '비밀번호 변경'
//reset 버튼 클릭 시 비밀번호 입력 칸 값 초기화(제거)
sumit.addEventListener('click',function(){
    window.alert('비밀번호 변경');
})
reset.addEventListener('click',function(){
    pwd.value = ''
})
//----------------------------------------------------------
//undefined 정의되지 않은 상태
let b = 10
let c
console.log(b, c);
console.log(b+c);//10+undefined = NaN = Not a Nunmer
//문자+문자 = 문자
//문자+숫자 = 문자
//-----------------------------------------------------------
console.log('------------------------------------------')
let num1 = 10;
num1++;
console.log(num1);//11
num1--;
console.log(num1);//10
console.log(++num1);
console.log(num1);
/*출력 또는 대입연산자와 함께 할 때
저위, 후위 여산자에 따른 결과값이 다르게 출력된다.
출력예) console.log(num1++)
콘솔로그로 기존 num1의 값을 먼저 전송출력 후
++ 증감연산자로 num1의 값을 나중에 1증가한다.
개별예) num1--
출력, 대입 관계없이 증감연산자를 개별로 작성한 경우
전위, 후위 연산과 관계없이 무조건 1증가 또는 1감소된다.
*/
let num2 = 5
let num3 = 0
console.log(`초기값 num2=${num2}, num3=${num3}`)
num3 = num2++
console.log(`num2=${num2}, num3=${num3}`) //num2=6, num3=5
num3 = ++num2
console.log(`num2=${num2}, num3=${num3}`) //num2=7, num3=7
console.log('------------------------------------------')
let number1 = 10;
let number2 = 20;
let result;
number1--;
console.log(number1);//결과:9
number1++;
console.log(number1);//결과:10
result = number2++;
console.log(result);//결과:20
result=++number2;
console.log(result);//결과:22