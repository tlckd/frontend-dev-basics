/**
	간단한 제이쿼리 구현 해보기 
 */
 
 var jQuery = function(param){ 
	if(typeof(param) === 'function'){ // 타입이 함수일때
		window.addEventListener("load",param); // 이벤트 리스너에 추가 
		return;
	}
	if(typeof(param) === 'string'){ // 함수가 아니면 
		var elements = document.querySelector(param); //css 검색 ㅇㅇ 
		return new _jQuery(elements);
	}
}
var _jQuery = function(elements){
	this.length = elements.length;
	for(var i=0;i<this.length;i++){
		this[i] = elements[i];
	}
}

_jQuery.prototype.jquery = 'jquery.simple.0.0.1';
_jQuery.prototype.css = function(name,value){
	for(var i=0; i<this.length;i++){
		this[i].style[name] = value; 
	}
	return this; // 자기자신을 리턴함 
};

_jQuery.prototype.click = function(handler){
	for(var i=0; i<this.length;i++){
		this[i].addEventListener("click",handler); 
	}
	return this; // 자기자신을 리턴함 
} 


var $ = jQuery; // 두개 같은함수 ㅇㅇ 