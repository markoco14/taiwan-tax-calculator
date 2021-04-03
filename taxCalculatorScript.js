
const input = document.getElementById('income');
const submit = document.getElementById('submit');


//TAX VARIABLES HERE
//create references to the table tax cells
const firstTableTax = document.getElementById('firstNetTax');
const secondTableTax = document.getElementById('secondNetTax');
const thirdTableTax = document.getElementById('thirdNetTax');
const fourthTableTax = document.getElementById('fourthNetTax');
const fifthTableTax = document.getElementById('fifthNetTax');
const sixthTableTax = document.getElementById('sixthNetTax');

//make array for table tax cells
let tableTaxArray = [
	firstTableTax, 
	secondTableTax, 
	thirdTableTax, 
	fourthTableTax, 
	fifthTableTax, 
	sixthTableTax
	]

//create references to the table net income cells
const firstTableNet = document.getElementById('firstNetIncome');
const secondTableNet = document.getElementById('secondNetIncome');
const thirdTableNet = document.getElementById('thirdNetIncome');
const fourthTableNet = document.getElementById('fourthNetIncome');
const fifthTableNet = document.getElementById('fifthNetIncome');
const sixthTableNet = document.getElementById('sixthNetIncome');

//make array for table income cells
let tableIncomeArray = [
	firstTableNet,
	secondTableNet,
	thirdTableNet,
	fourthTableNet,
	fifthTableNet,
	sixthTableNet,
]

//make an array for gross income variables
const firstGrossIncome = document.getElementById('firstGrossIncome');
const secondGrossIncome = document.getElementById('secondGrossIncome');
const thirdGrossIncome = document.getElementById('thirdGrossIncome');
const fourthGrossIncome = document.getElementById('fourthGrossIncome');
const fifthGrossIncome = document.getElementById('fifthGrossIncome');
const sixthGrossIncome = document.getElementById('sixthGrossIncome');

let grossTableArray = [
	firstGrossIncome,
	secondGrossIncome,
	thirdGrossIncome,
	fourthGrossIncome,
	fifthGrossIncome,
	sixthGrossIncome,
]

// establish gross income variable for functions
let grossIncome;
let netIncome;
let netTax;


//make tax rate variables
let firstTaxRate = 0.05; //5% first tax bracket
let secondTaxRate = 0.12; //12% second tax bracket
let thirdTaxRate = 0.2; //20% third tax bracket
let fourthTaxRate = 0.3; //30% fourth tax bracket
let fifthTaxRate = 0.4; //40% fifth tax bracket
let sixthTaxRate = 0.45; //45% sixth tax bracket

//make max bracket amount variables
let firstRange = 540000;
let secondRange = 1210000 - firstRange;
let thirdRange = 2420000 - secondRange - firstRange;
let fourthRange = 4530000 - thirdRange - secondRange - firstRange;
let fifthRange = 10310000 - fourthRange - thirdRange - secondRange - firstRange;
//6th bracket open ended. to infinity and beyond. no max.
//make an array for the income range values
let incomeRangeArray = [
	firstRange,
	secondRange,
	thirdRange,
	fourthRange,
	fifthRange
]

//make $max tax variables for each bracket
let firstTaxMax = Math.floor(firstRange * firstTaxRate);
let secondTaxMax = Math.floor(secondRange * secondTaxRate);
let thirdTaxMax = Math.floor(thirdRange * thirdTaxRate);
let fourthTaxMax = Math.floor(fourthRange * fourthTaxRate);
let fifthTaxMax = Math.floor(fifthRange * fifthTaxRate)
//6th bracket open ended. to infinity and beyond. no max.
//make an array for the max tax variables
let maxTaxArray = [
	firstTaxMax,
	secondTaxMax,
	thirdTaxMax,
	fourthTaxMax,
	fifthTaxMax,
]
//intitalize totalTax and totalIncome variables
const totalTax = document.getElementById('total-tax')
const totalIncome = document.getElementById('total-income')

// write function for income <= 540000
let firstBracket = function() {
	//get your gross income
	grossIncome = input.value;
	//find the taxes
	netTax = grossIncome * firstTaxRate;
	//find net income
	netIncome = grossIncome - netTax;
	//set table data content
	firstTableTax.textContent = `$${netTax.toLocaleString('en-US')}`;
	firstTableNet.textContent = `$${netIncome.toLocaleString('en-US')}`;
	/*firstGrossIncome.textContent = `$${grossIncome}`;*/
	//set the net income and taxes content
	totalTax.textContent = `${netTax}`;
	totalIncome.textContent = `${netIncome}`;
	totalTax.className = 'tax-data'
	totalIncome.className = 'income-data'
}

// write function for 540000 < income <= 1210000
let secondBracket = function() {
	grossIncome = input.value;
	//variables to separate your income into brackets
	let grossIncomeOne = firstRange;
	let grossIncomeTwo = grossIncome - firstRange;
	//variable to hold the taxes you pay
	let firstIncomeTax = firstTaxMax;
	let secondIncomeTax = grossIncomeTwo * secondTaxRate;
	//variables to hold the separated net incomes
	let firstNetIncome = firstRange - firstIncomeTax;
	let secondNetIncome = grossIncomeTwo - secondIncomeTax;
	// variable to calculate the total net income
	netIncome = firstNetIncome + secondNetIncome;
	netTax = firstIncomeTax + secondIncomeTax;


	//set table data content
	for (i = 0; i < 1; i++) {
		tableTaxArray[i].textContent = `$${maxTaxArray[i].toLocaleString('en-US')}`;
		tableIncomeArray[i].textContent = `$${(incomeRangeArray[i]-maxTaxArray[i]).toLocaleString('en-US')}`;
		/*grossTableArray[i].textContent = `$${incomeRangeArray[i]}`;*/
	}

	secondTableTax.textContent = `$${secondIncomeTax.toLocaleString('en-US')}`;
	secondTableNet.textContent = `$${secondNetIncome.toLocaleString('en-US')}`;
	/*secondGrossIncome.textContent = `$${grossIncomeTwo}`;*/
	
	totalTax.textContent = `${netTax}`;
	totalIncome.textContent = `${netIncome}`;
	totalTax.className = 'tax-data'
	totalIncome.className = 'income-data'
}

let thirdBracket = function() {
	grossIncome = input.value;
	//find the gross income for third bracket
	let grossIncomeOne = firstRange;
	let grossIncomeTwo = secondRange;
	let grossIncomeThree = grossIncome - secondRange - firstRange;
	//find the total taxes for third bracket
	let firstIncomeTax = firstTaxMax;
	let secondIncomeTax = secondTaxMax;
	let thirdIncomeTax = grossIncomeThree * thirdTaxRate;
	//find net income for third bracket
	let firstNetIncome = firstRange - firstIncomeTax;
	let secondNetIncome = secondRange - secondIncomeTax;
	let netIncomeThree = grossIncomeThree - thirdIncomeTax;
	//find total net income
	netIncome = netIncomeThree + firstNetIncome + secondNetIncome;
	netTax = firstIncomeTax + secondIncomeTax + thirdIncomeTax;

	// set the table data content
	for (i = 0; i < 2; i++) {
		tableTaxArray[i].textContent = `$${maxTaxArray[i].toLocaleString('en-US')}`;
		tableIncomeArray[i].textContent = `$${(incomeRangeArray[i]-maxTaxArray[i]).toLocaleString('en-US')}`;
		/*grossTableArray[i].textContent = `$${incomeRangeArray[i]}`;*/
	}

	thirdTableTax.textContent = `$${thirdIncomeTax.toLocaleString('en-US')}`;
	thirdTableNet.textContent = `$${netIncomeThree.toLocaleString('en-US')}`;
	/*thirdGrossIncome.textContent = `$${grossIncomeThree}`;*/

	totalTax.textContent = `${netTax}`;
	totalIncome.textContent = `${netIncome}`;
	totalTax.className = 'tax-data'
	totalIncome.className = 'income-data'


}

let fourthBracket = function() {
	grossIncome = input.value;
	//establish first three brackets
	let grossIncomeOne = firstRange;
	let grossIncomeTwo = secondRange;
	let grossIncomeThree = thirdRange;
	let grossIncomeFour = grossIncome - thirdRange - secondRange - firstRange;
	//find the total taxes in each bracket
	let firstIncomeTax = firstTaxMax;
	let secondIncomeTax = secondTaxMax;
	let thirdIncomeTax = thirdTaxMax;
	let fourthIncomeTax = grossIncomeFour * fourthTaxRate;
	//find the net income in each bracket
	let netIncomeOne = firstRange - firstTaxMax;
	let netIncomeTwo = secondRange - secondTaxMax;
	let netIncomeThree = thirdRange - thirdTaxMax;
	let netIncomeFour = grossIncomeFour - fourthIncomeTax;
	//find the total net income
	netIncome = netIncomeOne + netIncomeTwo + netIncomeThree + netIncomeFour
	netTax = firstIncomeTax + secondIncomeTax + thirdIncomeTax + fourthIncomeTax;

	// set the table data content
	for (i = 0; i < 3; i++) {
		tableTaxArray[i].textContent = `$${maxTaxArray[i].toLocaleString('en-US')}`;
		tableIncomeArray[i].textContent = `$${(incomeRangeArray[i]-maxTaxArray[i]).toLocaleString('en-US')}`;
		/*grossTableArray[i].textContent = `$${incomeRangeArray[i]}`;*/
	}

	fourthTableTax.textContent = `$${fourthIncomeTax.toLocaleString('en-US')}`;
	fourthTableNet.textContent = `$${netIncomeFour.toLocaleString('en-US')}`;
	/*fourthGrossIncome.textContent = `$${grossIncomeFour}`;*/

	totalTax.textContent = `${netTax}`;
	totalIncome.textContent = `${netIncome}`;
	totalTax.className = 'tax-data'
	totalIncome.className = 'income-data'

}

//function for the fifth tax bracket
let fifthBracket = function() {
	grossIncome = input.value;
	//gross income for each bracket
	let grossIncomeOne = firstRange;
	let grossIncomeTwo = secondRange;
	let grossIncomeThree = thirdRange;
	let grossIncomeFour = fourthRange;
	let grossIncomeFive = grossIncome - fourthRange - thirdRange - secondRange - firstRange;

	//tax amounts for each bracket
	let firstIncomeTax = firstTaxMax;
	let secondIncomeTax = secondTaxMax;
	let thirdIncomeTax = thirdTaxMax;
	let fourthIncomeTax = fourthTaxMax;
	let fifthIncomeTax = grossIncomeFive * fifthTaxRate;

	//net income for each bracket
	let firstNetIncome = grossIncomeOne - firstIncomeTax;
	let secondNetIncome = grossIncomeTwo - secondIncomeTax;
	let thirdNetIncome = grossIncomeThree - thirdIncomeTax;
	let fourthNetIncome = grossIncomeFour - fourthIncomeTax;
	let fifthNetIncome = grossIncomeFive - fifthIncomeTax;

	//total net income
	netIncome = firstNetIncome + secondNetIncome + thirdNetIncome + fourthNetIncome + fifthNetIncome;
	netTax = firstIncomeTax + secondIncomeTax + thirdIncomeTax + fourthIncomeTax + fifthIncomeTax;

	// set the table data content
	for (i = 0; i < 4; i++) {
		tableTaxArray[i].textContent = `$${maxTaxArray[i].toLocaleString('en-US')}`;
		tableIncomeArray[i].textContent = `$${(incomeRangeArray[i]-maxTaxArray[i]).toLocaleString('en-US')}`;
		/*grossTableArray[i].textContent = `$${incomeRangeArray[i]}`;*/
	}

	fifthTableTax.textContent = `$${fifthIncomeTax.toLocaleString('en-US')}`;
	fifthTableNet.textContent = `$${fifthNetIncome.toLocaleString('en-US')}`;
	/*fifthGrossIncome.textContent = `$${grossIncomeFive}`;*/

	totalTax.textContent = `${netTax}`;
	totalIncome.textContent = `${netIncome}`;
	totalTax.className = 'tax-data'
	totalIncome.className = 'income-data'

}

let sixthBracket = function() {
	grossIncome = input.value;

	//income at each bracket
	let grossIncomeOne = firstRange;
	let grossIncomeTwo = secondRange;
	let grossIncomeThree = thirdRange;
	let grossIncomeFour = fourthRange;
	let grossIncomeFive = fifthRange;
	let grossIncomeSix = grossIncome - fifthRange - fourthRange - thirdRange - secondRange - firstRange;
	

	//tax at each bracket
	let firstIncomeTax = firstTaxMax;
	let secondIncomeTax = secondTaxMax;
	let thirdIncomeTax = thirdTaxMax;
	let fourthIncomeTax = fourthTaxMax;
	let fifthIncomeTax = fifthTaxMax;
	let sixthIncomeTax = grossIncomeSix * sixthTaxRate;

	//net income at each bracket
	let netIncomeOne = grossIncomeOne - firstIncomeTax;
	let netIncomeTwo = grossIncomeTwo - secondIncomeTax;
	let netIncomeThree = grossIncomeThree - thirdIncomeTax;
	let netIncomeFour = grossIncomeFour - fourthIncomeTax;
	let netIncomeFive = grossIncomeFive - fifthIncomeTax;
	let netIncomeSix = grossIncomeSix - sixthIncomeTax;

	//total net income
	netIncome = netIncomeOne + netIncomeTwo + netIncomeThree + netIncomeFour + netIncomeFive + netIncomeSix;
	netTax = firstIncomeTax + secondIncomeTax + thirdIncomeTax + fourthIncomeTax + fifthIncomeTax + sixthIncomeTax;

	// set the table data content
	// I want to shortner the second line... 
	//but I would need variables and arrays for the calculations
	//try to add the locale string method into the for loop
	//since it works I can copy and paste the code into the other for loops
	for (i = 0; i < 5; i++) {
		tableTaxArray[i].textContent = `$${maxTaxArray[i].toLocaleString('en-US')}`;
		tableIncomeArray[i].textContent = `$${(incomeRangeArray[i]-maxTaxArray[i]).toLocaleString('en-US')}`;
		/*grossTableArray[i].textContent = `$${incomeRangeArray[i]}`;*/
	}
	
	sixthTableTax.textContent = `$${sixthIncomeTax.toLocaleString('en-US')}`;
	sixthTableNet.textContent = `$${netIncomeSix.toLocaleString('en-US')}`;
	/*sixthGrossIncome.textContent = `$${grossIncomeSix}`;*/

	totalTax.textContent = `${netTax}`;
	totalIncome.textContent = `${netIncome}`;
	totalTax.className = 'tax-data'
	totalIncome.className = 'income-data'


}

let userInput;
//function to call tax functions on click
let chooseFunction = function(whichFunctions) {
	if (input.value === '') {
		alert('You need to enter a number to use the tax calculator.')
		return
	} 

	if (!(Number(input.value) >= 0)) {
		alert('You need to enter a number to use the tax calculator.')
		input.value = '';
		return
	}

	//all of these for loops can be put into one 
	//as long as each is equal in length.
	//but before I do I want to find out if
	//I should make an object with properties for each of these. 
	//reset the table tax data
	for (i = 0; i < tableTaxArray.length; i++) {
		tableTaxArray[i].textContent = '';
	}
	//reset the table net income data
	for (i = 0; i < tableIncomeArray.length; i++) {
		tableIncomeArray[i].textContent = '';
	}
	//reset the table gross income data
	/*for (i = 0; i < grossTableArray.length; i++) {
		grossTableArray[i].textContent = '';
	}*/

	//reset total tax and income
	totalTax.textContent = '';
	totalIncome.textContent = '';
	totalTax.className = '';
	totalIncome.className = '';

	//reset the conversion tax and income
	
	foreignTax.textContent = '';
	foreignIncome.textContent = '';
	foreignTax.className = '';
	foreignIncome.className = '';

	//the lines below reset the currency converter
	select.value = '';
	yourIncome.textContent = '';
	yourTax.textContent = '';
	
	userInput = input.value;
	
	grossIncome = input.value;
	if (grossIncome < 540001) {
		firstBracket();
	} else if (grossIncome >= 540001  && grossIncome < 1210001) {
		secondBracket();
	} else if (grossIncome >= 1210001 && grossIncome < 2420001) {
		thirdBracket();
	} else if (grossIncome >= 2420001 && grossIncome < 4530001){
		fourthBracket();
	} else if (grossIncome >= 4530001 && grossIncome < 10310001) {
		fifthBracket();
	} else if (grossIncome >= 10310001 ) {
		sixthBracket();
	} 
	//check if userInput is a number
	
	//i tried to think how i would do it..
	//then I looked it up..
	//it seems like it is pretty easy to do, actually..
	//just use .toLocaleString('en-US');
	//I just took the $ out of the number above in each bracket's function
	//so I'd have a pure number, and simply add the $ in after
	//I do the localeString() method
	let taxNumber = Number(totalTax.textContent).toLocaleString('en-US');
	let incomeNumber = Number(totalIncome.textContent).toLocaleString('en-US');
	//console.log(`Your net taxes are $${taxNumber}`)
	totalTax.textContent =  `$${taxNumber}`;
	totalIncome.textContent =  `$${incomeNumber}`;

	//make the input text content have commas
	//here I'm waiting until the function is actually carried
	//before I check for an error and stop the function
	//I need to find a way to test if the input value is not a number earlier
	//input.value = `$${Number(grossIncome).toLocaleString('en-US')}`
	
	/*
	//reset userInput
	let noCommas = function() {
		userInput = userInput.slice(userInput.indexOf('$')+1);
		userInput = userInput.split(',');
		let newUserInput = userInput[0];
		for (i = 1; i < userInput.length; i++) {
			newUserInput += userInput[i];
		}
		userInput = newUserInput;
	}
	*/
	
	
	

	//color the tax and income cells that have data
	//note that tax and income are in two separate arrays
	//but both arrays are the same length so I can use 1 array to track the [i] value
	//and affect both tax and income data cells
	//I think this means that I probably need to make an array of objects
	//this would let me hold multiple tax and net income and even range values for each bracket
	//note that I am using the length of the tax array
	//to loop through both the tax array and the net income array
	for (i = 0; i < tableTaxArray.length; i++) {
		if (tableTaxArray[i].textContent !== '') {
			tableTaxArray[i].className = 'tax-data'
			tableIncomeArray[i].className = 'income-data'
		} else {
			tableTaxArray[i].className = 'no-tax-data'
			tableIncomeArray[i].className = 'no-income-data'
		}
	}

	

	
	
}	

submit.addEventListener('click', chooseFunction);

