 $(document).ready(function() {
	$(window).resize(function(){
		    var w = $(window).width();
		    var topnav = $("#topnav");
		    if(w > 800) { //не забудь поменять условие на правильное
		    	//меняем значение аттрибута class элемента topnav
		        topnav.attr("class","header__menu"); 
		    }
		});
	 menu.onclick = function myFunction() {
		var x = document.getElementById("topnav");
		if(x.className === "header__menu") {
			x.className += " responsive";
		}  else{
				x.className = "header__menu";

		}
	}
});