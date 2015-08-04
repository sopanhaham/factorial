var userInput = document.getElementById('userInput');
var submitBtn = document.getElementById('submit');
var outputP = document.getElementById('outputP');


submitBtn.addEventListener('click',function(){
	userInputValue = Number(userInput.value);

	if(userInputValue>=0 && userInputValue) {
		for(i=2,outputValue=1; i<=userInputValue; i++) {
			outputValue *= i;
		}

		outputP.innerHTML= "Answer: "+ userInputValue +"! = " + outputValue;

	} else {
		userInput.value = "";
		outputP.innerHTML= "Please check your number!";
	}
});