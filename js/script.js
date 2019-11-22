function init(){
//add your javascrip between these two lines of code
	var button = document.getElementById('entrybutton');
	
	function showMe(){
		var textbox = document.getElementById('entryinput')
		document.getElementById('textoutput').innerHTML = textbox.value;
		alert("Hasani Valdez: " + textbox.value);


	}
	
	button.addEventListener('click', showMe);


}

window.addEventListener('load', init);
