//자바스크립트 연산자
let a = 10;
let b = 5;
let c = 1;
console.log(`${a}+${b}=${a+b}`);
console.log(a+'+'+b+'='+(a+b));
console.log(`${a}-${c}=${a-c}`);
console.log(`${b}X${c}=${b*c}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`);
console.log('-------------------------------')
//연결 연산자
console.log('10'+10);//1010 연결연산자
console.log(10+10)//20 더하기연산자
console.log(typeof('10'+10));//string
console.log(typeof(10+10));//number
console.log('-------------------------------')
//복합연산자
let age = 20
//age = age+1
age += 1 //age = age+1
console.log(`${age}살`)//21살
age -= 1 //age = age-1
console.log(`${age}살`)//20살
age *= 5 //age = age*5
console.log(`${age}살`)//100살
age /= 2 //age = age/2
console.log(`${age}살`)//50살
age %= 2//age = age%2
console.log(`${age}살`)//0살
console.log('-------------------------------')
//복합대입연산자를 이용한 태그 생성방법
let cart_li = '<ul>'//빈 장바구니(초기)
//참기름 1개 장바구니 담기
cart_li +='<li>참기름1개</li>'
//베이글 2개 장바구니 담기
cart_li += '<li>베이글2개</li>'
cart_li += '</ul>'
console.log(cart_li);
console.log('-------------------------------')
//태그생성메소드 createElement('생성태그명')
let cartNewLi = document.createElement('ul');//ul태그생성
const cart_contents = document.querySelector('#cart .contents');
cartNewLi.innerHTML = '<li>참기름 1개</li>';//ul안에li생성
cartNewLi.innerHTML += '<li>베이글 2개</li>';
console.log(cartNewLi);
console.log(cart_contents);
cart_contents.appendChild(cartNewLi);//cart_contents안에 cartNewLi생성