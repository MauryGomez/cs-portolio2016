window.onload = function() {
	var seconds = 00;
	var tens = 00;
	var Tens = document.getElementById("tens");
	var Sec = document.getElementById("seconds");
	var buttonStart = document.getElementById('start');
	var buttonStop = document.getElementById('stop');
	var buttonReset = document.getElementById('reset');
	buttonStop.style.visibility = "hidden";
	var random = Math.floor(Math.random()*1000)+1000;
	var Interval;

	
	//start button/button visablity
	buttonStart.onclick = function() {
			buttonStart.style.visibility = "hidden";
			setTimeout(function(){
			clearInterval(Interval);
			Interval = setInterval(startTimer, 10);
			buttonStop.style.visibility = "visible";
	
	
			
			},random );
		};
	
		//stop button/ button visiblitly
	buttonStop.onclick = function() {
		clearInterval(Interval);
		buttonStop.style.visibility = "hidden";

	};

	//clear time, set time to zero
	buttonReset.onclick = function() {
			clearInterval(Interval);
			tens = "00";
			seconds = "00";
			Tens.innerHTML = tens;
			Sec.innerHTML = seconds;
			buttonStart.style.visibility = "visible";
			buttonStop.style.visibility = "hidden";
		};
	
		// counting milliseconds to seconds 
	function startTimer() {
		tens++;
		if (tens < 9) {
			Tens.innerHTML = "0" + tens;
		}
		if (tens > 9) {
			Tens.innerHTML = tens;
		}
		if (tens > 99) {
			console.log("seconds");
			seconds++;
			Sec.innerHTML = "0" + seconds;
			tens = 0;
			Tens.innerHTML = "0" + 0;
		}
		if (seconds > 9) {
			Sec.innerHTML = seconds;
		}

	}

};




