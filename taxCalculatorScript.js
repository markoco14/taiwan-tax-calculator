
const input = document.getElementById('income');
const submit = document.getElementById('submit');

//create references to the paragraphs
const paraOne = document.createElement('p');
const paraTwo = document.createElement('p');
const paraThree = document.createElement('p');
const paraFour = document.createElement('p');
const paraFive = document.createElement('p');
const paraSix = document.createElement('p');
const paraNet = document.createElement('p');

//create an array for the paragraphs
//initialize all your paragraph variables in the array.
//I don't think it is possible to initialize all my variables in an array

let paragraphArray = [
	paraOne, 
	paraTwo, 
	paraThree, 
	paraFour, 
	paraFive, 
	paraSix, 
	paraNet
	]

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

// establish gross income variable for functions
let grossIncome;


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

// write function for income <= 540000
let firstBracket = function() {
	//get your gross income
	grossIncome = input.value;
	//find the taxes
	let incomeTax = grossIncome * firstTaxRate;
	//find net income
	let netIncome = grossIncome - incomeTax;
	//make paragraph
	paraOne.textContent = `You will pay $${incomeTax} on $${grossIncome}. `;
	paraNet.textContent = `Your net income is $${netIncome}.`;
	//set table data content
	firstTableTax.textContent = incomeTax;
	firstTableNet.textContent = netIncome;
	
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
	let netIncome = firstNetIncome + secondNetIncome;
	// change para text content and append
	paraOne.textContent = `You will pay $${firstTaxMax} on your first $${firstRange}.`
	paraTwo.textContent = ` You will pay $${secondIncomeTax} on the remaining $${grossIncomeTwo}.`;
	paraNet.textContent = `Your net income is $${netIncome}.`;

	//set table data content
	for (i = 0; i < 1; i++) {
		tableTaxArray[i].textContent = maxTaxArray[i];
		tableIncomeArray[i].textContent = incomeRangeArray[i]-maxTaxArray[i]
	}

	secondTableTax.textContent = secondIncomeTax;
	secondTableNet.textContent = secondNetIncome;
	
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
	let netIncome = netIncomeThree + firstNetIncome + secondNetIncome;
	//change paragraph content
	paraOne.textContent = `You will pay $${firstTaxMax} on the first $${firstRange}.`;
	paraTwo.textContent = `You will pay $${secondTaxMax} on the second $${secondRange}.`;
	paraThree.textContent = `And you will pay $${thirdIncomeTax} on the remaining $${grossIncomeThree}.`;
	paraNet.textContent = `Your net income is $${netIncome}`;

	// set the table data content
	for (i = 0; i < 2; i++) {
		tableTaxArray[i].textContent = maxTaxArray[i];
		tableIncomeArray[i].textContent = incomeRangeArray[i]-maxTaxArray[i]
	}
	thirdTableTax.textContent = thirdIncomeTax;
	thirdTableNet.textContent = netIncomeThree;

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
	let netIncome = netIncomeOne + netIncomeTwo + netIncomeThree + netIncomeFour
	//set the paragraph content
	paraOne.textContent = `You will pay $${firstTaxMax} on the first $${firstRange}.`;
	paraTwo.textContent = `You will pay $${secondTaxMax} on the second $${secondRange}.`;
	paraThree.textContent =  `You will pay $${thirdTaxMax} on the third $${thirdRange}.`;
	paraFour.textContent = `And you will pay $${fourthIncomeTax} on the remaining $${grossIncomeFour}.`
	paraNet.textContent = `Your net income is $${netIncome}.`;

	// set the table data content
	for (i = 0; i < 3; i++) {
		tableTaxArray[i].textContent = maxTaxArray[i];
		tableIncomeArray[i].textContent = incomeRangeArray[i]-maxTaxArray[i]
	}

	fourthTableTax.textContent = fourthIncomeTax;
	fourthTableNet.textContent = netIncomeFour;

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
	let netIncome = firstNetIncome + secondNetIncome + thirdNetIncome + fourthNetIncome + fifthNetIncome;

	//paragraph content
	paraOne.textContent = `You will pay $${firstTaxMax} on the first $${firstRange}.`;
	paraTwo.textContent = `You will pay $${secondTaxMax} on the second $${secondRange}.`;
	paraThree.textContent =  `You will pay $${thirdTaxMax} on the third $${thirdRange}.`;
	paraFour.textContent = `You will pay $${fourthTaxMax} on the fourth $${fourthRange}.`;
	paraFive.textContent = `You will pay $${fifthIncomeTax} on the remaining $${grossIncomeFive}.`
	paraNet.textContent = `Your net income is $${netIncome}.`;

	// set the table data content
	for (i = 0; i < 4; i++) {
		tableTaxArray[i].textContent = maxTaxArray[i];
		tableIncomeArray[i].textContent = incomeRangeArray[i]-maxTaxArray[i]
	}

	fifthTableTax.textContent = fifthIncomeTax;
	fifthTableNet.textContent = fifthNetIncome;

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
	let netIncome = netIncomeOne + netIncomeTwo + netIncomeThree + netIncomeFour + netIncomeFive + netIncomeSix;

	//set the paragraph text content
	paraOne.textContent = `You will pay $${firstTaxMax} on the first $${firstRange}.`;
	paraTwo.textContent = `You will pay $${secondTaxMax} on the second $${secondRange}.`;
	paraThree.textContent =  `You will pay $${thirdTaxMax} on the third $${thirdRange}.`;
	paraFour.textContent = `You will pay $${fourthTaxMax} on the fourth $${fourthRange}.`;
	paraFive.textContent = `You will pay $${fifthTaxMax} on the fifth $${fifthRange}. `;
	paraSix.textContent = `And you will pay $${sixthIncomeTax} on the remaining $${grossIncomeSix}.`;
	paraNet.textContent = `Your net income is $${netIncome}.`;

	// set the table data content
	// I want to shortner the second line... 
	//but I would need variables and arrays for the calculations
	for (i = 0; i < 5; i++) {
		tableTaxArray[i].textContent = maxTaxArray[i];
		tableIncomeArray[i].textContent = incomeRangeArray[i]-maxTaxArray[i]
	}
	
	sixthTableTax.textContent = sixthIncomeTax;
	sixthTableNet.textContent = netIncomeSix;

}

/*
//set the styling for the table tax and income cells
for (i = 0; i < tableTaxArray; i++) {
	if (tableTaxArray[i].textContent === '') {
		tableTaxArray[i].className = 'no-data';
	} else {
		tableTaxArray[i].className = 'tax-data';

	}
}
*/

//function to call tax functions on click
let chooseFunction = function(whichFunctions) {
	//reset the paragraph content
	for (i = 0; i < paragraphArray.length; i++) {
		paragraphArray[i].textContent = '';
	}
	//reset the table tax data
	for (i = 0; i < tableTaxArray.length; i++) {
		tableTaxArray[i].textContent = '';
	}
	//reset the table net income data
	for (i = 0; i < tableIncomeArray.length; i++) {
		tableIncomeArray[i].textContent = '';
	}
	/* this is code for changing the class names. I don't think
	it belongs here but I'm storing it here anyways.
	for (i = 0; i < tableIncomeArray.length; i++) {
		if (tableIncomeArray[i].textContent === ''){
			tableIncomeArray[i].className = 'no-data';
		} else {
			tableIncomeArray[i].className = 'income-data';
		}
	} */

	//reset the empty cell styling

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

	//color the tax and income cells that have data
	//note that tax and income are in two separate arrays
	//but both arrays are the same length so I can use 1 array to track the [i] value
	//and affect both tax and income data cells
	//I think this means that I probably need to make an array of objects
	//this would let me hold multiple tax and net income and even range values for each bracket
	for (i = 0; i < tableTaxArray.length; i++) {
		if (tableTaxArray[i].textContent !== '') {
			tableTaxArray[i].className = 'tax-data'
			tableIncomeArray[i].className = 'income-data'
		} else {
			tableTaxArray[i].className = 'no-tax-data'
			tableIncomeArray[i].className = 'no-income-data'
		}
	}

	//append paragraphs.
	document.body.appendChild(paraOne);
	document.body.appendChild(paraTwo);
	document.body.appendChild(paraThree);
	document.body.appendChild(paraFour);
	document.body.appendChild(paraFive);
	document.body.appendChild(paraSix);
	document.body.appendChild(paraNet);
}	

submit.addEventListener('click', chooseFunction);

