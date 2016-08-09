var cash = 0;
var startingBet = 0;
var originalBet = 0;

var black = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
var red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
var green = [0, 37];

function regularSpin(){
	var rBet = parseInt(document.getElementById("rBet").value);
	var nums = parseInt(document.getElementById("nums").value);
	var rCash = parseInt(document.getElementById("rCash").value);
	if(nums== 00){
		nums = 37;
	}
	if(!black.includes(nums) && !red.includes(nums) && !green.includes(nums)){
		alert("Please enter 0, 00, or a number 1-36");
	} else {
		rCash-=rBet;
		var spin = Math.floor((Math.random() * 38));
		setNumber(spin);
		if(nums == spin){
			document.getElementById("rCash").className = "form-control text-success";
			resetText("rCash");
			rCash+=(rBet*37);
			document.getElementById("rCash").value = rCash;
		} else {
			document.getElementById("rCash").className = "form-control text-danger";
			resetText("rCash");
			document.getElementById("rCash").value = rCash;
		}
	}
}

function setNumber(num){
	if(black.includes(num)){
		document.getElementById("number").value = num;
		document.getElementById("color").value = "black";
		document.getElementById("color").className = "";
	}
	if(red.includes(num)){
		document.getElementById("number").value = num;
		document.getElementById("color").value = "red";
		document.getElementById("color").className = "text-danger";
	}
	if(green.includes(num)){
		if(num==37){
			document.getElementById("number").value = "00";
		} else {document.getElementById("number").value = num;}
		document.getElementById("color").value = "green";
		document.getElementById("color").className = "text-success";
	}
}

function resetText(clName){
	setTimeout(function(){
		document.getElementById(clName).className = "form-control";
	},350);
}

function spin(money, bet){
	number = Math.floor((Math.random() * 38));
	if(black.includes(number)){
		document.getElementById("cash").className = "form-control text-success";
		resetText("cash");
		setNumber(number);
		money+=bet;
		startingBet = originalBet;
		cash = money;
	}
	if(red.includes(number)){
		document.getElementById("cash").className = "form-control text-danger";
		resetText("cash");
		setNumber(number);
		money-=bet;
		startingBet = bet *2;
		cash = money;;
	}
	if(green.includes(number)){
		setNumber(number);
		document.getElementById("cash").className = "form-control text-danger";
		resetText("cash");
		money-=(bet/2);
		startingBet = bet *2;
		cash = money;
	}
}
function getOriginalBet(){
	originalBet = parseInt(document.getElementById("bet").value);
}

function onSpin(){
	cash = parseInt(document.getElementById("cash").value);
	startingBet = parseInt(document.getElementById("bet").value);
	if(startingBet > 2000){
		alert("You're over the maximum bet of $2,000!");
		return null;
	}
	if(startingBet > cash){
		alert("You don't have enough cash to cover this bet");
		return null;
	}
	spin(cash, startingBet);
	document.getElementById("cash").value = cash;
	document.getElementById("bet").value = startingBet;
}
function spinOneHundred(){
	for(i=0;i<101;i++){
		cash = parseInt(document.getElementById("cash").value);
		startingBet = parseInt(document.getElementById("bet").value);
		if(startingBet > 2000){
			alert("You're over the maximum bet of $2,000!");
			break;
		}
		if(startingBet > cash){
			alert("You don't have enough cash to cover this bet");
			break;
		}
		spin(cash, startingBet);
		document.getElementById("cash").value = cash;
		document.getElementById("bet").value = startingBet;
	}
}
