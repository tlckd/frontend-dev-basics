// jQuery로 작성하기

var tabBox = {
	
	init: function() {
		window.addEventListener('load', this._onWindowLoad.bind(this));
	},
	
	
	_onTabClicked: function() {
		// unselect
		var lisSelected = document.getElementsByClassName('selected');
		lisSelected.length == 1 && (lisSelected[0].className = '');
		
		//select
		this.className = 'selected';
	},
	
	_onWindowLoad: function() {
		// var divTabBox = document.getElementsByClassName("tab-box")[0];
		// var ul = divTabBox.childNodes[1];
		// var liTabs = ul.getElementsByTagName("li");
		
		var liTabs = $(".tab-box>ul>li");
		
		for(var i = 0; i < liTabs.length; i++){
			//liTabs[i].addEventListener("click", this._onTabClicked);
			liTabs[i].onclick(function(){
				this._onTabClicked
			})
		}
		
		
		
	}
};