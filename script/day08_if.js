//조건문 if
//비교연산자에 의해 출력된 논리데이터의 참(true) 거짓(false)에 따라 다른 결과값을 보여주는 조건문
//if(조건식){조건결과가 참일 때 실행결과} //기본문법
//1. 사용자가 입력한 숫자가 짝수면 '짝수입니다' 결과 출력
// const num1 = Number(window.prompt('1~99 사이의 숫자를 입력하세요'))
// if(num1%2===0){//나머지가 0일 때
//     window.alert('짝수입니다')
// }
//---------------------------------------------------------
//2. 하루 걸음 수를 입력받고 만보 이상일 경우 '목표달성' 출력
// const manbo = Number(window.prompt('하루 걸음 수는?'))
// if(manbo>=10000){
//     window.alert('목표달성')
// }
//-------------------------------------------------
//3.거짓일 때 조건문
//if(조건식){참일 때 실행문}else{거짓일 때 실행문}
//관리자 아이디 : admin
//접속 시 아이디 확인 후 관리자면 => 관리자님 어서오세요
//관리자가 아니라면 => 관리자페이지 접근불가
// const userId = window.prompt('아이디를 입력하세요')
// if(userId !== 'admin'){
//     window.alert('관리자페이지 접근불가')//아이디가 admin이 아닐 때
// }else{
//     window.alert('관리자님 어서오세요')//아이디가 admin일 때
// }
//-------------------------------------------------
//사용자가 1~99 입력한 수가 짝수 => '짝수입니다'
//홀수 => '홀수입니다'
// const num1 = window.prompt('1~99까지 숫자를 입력하세요')
// if(num1%2 === 0){
//     window.alert('짝수입니다')
// }else{
//     window.alert('홀수입니다')
// }
//-------------------------------------
//중첩 if문 (if문 안에 if문 삽입)
//관리자 id:admin, pw:a1234
// const id = window.prompt('아이디는?')
// const pw = window.prompt('비밀번호는?')
// console.log(id,pw)
// if(id==='admin'){//1단 if
//     //중첩 if문 시작
//     if(pw==='a1234'){//2단 if (1단 if가 참일 경우 읽는 조건)
//         window.alert('로그인 성공')
//     }else{//2단 if가 거짓일 때
//         window.alert('로그인 실패, 비밀번호 오류')
//     }
//     //중첩 if문 종료
// }else{
//     window.alert('로그인 실패, 아이디 오류')
// }
//-------------------------------------------------
//논리연산자 &&(and) ||(or)
let a = 10
console.log(a===10) //true
console.log(a>10) //false
//비교 논리연산 비교
console.log(a===10 && a>=10)//true && true = true
console.log(a!==10 && a===10)//false && true = false
console.log(a!==10 || a===10)//false || true = true

const id = 'admin'
const pw = 'a1234'
if(id==='admin' && pw==='a1234'){
    console.log('로그인 성공')
}else{
    console.log('로그인 실패')
}

//시험점수를 입력받고 해당 점수에 따라 A~F 학점 출력하기
//100~90 A
//59 이하 F
//A가 아니라면 모두 F
const score = window.prompt('점수를 입력하세요')
if(100>=score && 90<=score){
    window.alert('A')
}else{
    window.alert('F')
}
