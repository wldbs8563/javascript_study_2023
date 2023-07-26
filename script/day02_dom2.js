//getElement.. 방법
const mainTag = document.getElementsByTagName('main');
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');
const first = document.getElementsByClassName('first');
const last = document.getElementsByClassName('last');
console.log(mainTag[0], hTag[0], contentsCls[0], boxId,);
console.log(aTag, aTag[0], aTag[1], aTag[2]);
console.log(first, last);
//querySelector.. 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('#box');
const aTagQ = document.querySelectorAll('a');
const firstQ = document.querySelector('.first')
const lastQ = document.querySelector('.last')
console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2]);
console.log(first[0], last[0]);