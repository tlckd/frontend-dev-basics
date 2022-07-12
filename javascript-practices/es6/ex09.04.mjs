/**
 * exprot 하는애 .안붙은애들은 import해서 쓰는거 
 * 
 * named export
 * 1.exports.name=...    : commoJS(require) 방식과 유사 
 * 
 * 2. 이 모듈을 import 할 때에는 destructing이 가능하다. 
 * 
 * 
 */

 const _a = function(a,b){
   return a+b;
}

const add = function(a,b){
   return _a(a,b);
}

const subtract = function(a,b){
   return a-b;
}

export{add,subtract} 


