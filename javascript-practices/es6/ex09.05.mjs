/**
 *
 * 
 * named export & unnamed export 혼합해서 쓰는거 
 * 
 * 
 */

const add = function(a,b){
   return a+b;
}

const subtract = function(a,b){
   return a-b;
}
const divide = function(a,b){
   return a/b;
}

const multiply = function(a,b){
   return a/b;
}

export{add, subtract} 
export default {divide,multiply} 





