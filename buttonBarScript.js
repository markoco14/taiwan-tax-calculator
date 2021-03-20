//make reference to flag button bar
const flagBar = document.getElementById('flag-bar');
const canadaFlag = document.getElementById('canada-flag');
const currencyFlag = document.getElementById('currency-flag');

let flagCurrency = function(e) {

	//initialize the tax variables
	//use .slice to remove the $ from the totalTax as foreignTax is created
	foreignTax.textContent = totalTax.textContent.slice(1);
	taxToNumber = Number(foreignTax.textContent);
	correctedTax = taxToNumber * 1/currencyData.rates.TWD; //this is EUR
	console.log(`Your tax converted from TWD to EUR is ${correctedTax}`);

	//initialize the income variables
	foreignIncome.textContent = totalIncome.textContent.slice(1);
	incomeToNumber = Number(foreignIncome.textContent);
	correctedIncome = incomeToNumber * 1/currencyData.rates.TWD; //this is EUR
	console.log(`Your income coverted from TWD to EUR is ${correctedIncome}`);

	//wire up the button bar
	//convert the taxes
	if (e.target.getAttribute('id') === 'canada-flag') {//convert to CAD
		cadTax = correctedTax * currencyData.rates.CAD;
		foreignTax.textContent = `$${Math.floor(cadTax)}`;
		yourTax.textContent = 'Canadian dollars';
		//convert the income
		cadIncome = correctedIncome *currencyData.rates.CAD;
		foreignIncome.textContent = `$${Math.floor(cadIncome)}`;
		yourIncome.textContent = 'Canadian dollars';
		//set the classes
		foreignTax.className = 'tax-data';
		foreignIncome.className = 'income-data';
		select.value = 'CAD';
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
	} else if (e.target.getAttribute('id') === 'us-flag') {//convert to USD
		//convert the taxes
		usdTax = correctedTax * currencyData.rates.USD;
		foreignTax.textContent = `$${Math.floor(usdTax)}`;
		yourTax.textContent = 'American dollars'
		//convert the income
		usdIncome = correctedIncome * currencyData.rates.USD;
		foreignIncome.textContent = `$${Math.floor(usdIncome)}`;
		yourIncome.textContent = 'American dollars'
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		select.value = 'USD'
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
	} else if (e.target.getAttribute('id') === 'aus-flag') {//convert to AUD
		audTax = correctedTax * currencyData.rates.AUD;
		foreignTax.textContent = `$${Math.floor(audTax)}`;
		yourTax.textContent = 'Australian dollars'
		//convert the income
		audIncome = correctedIncome * currencyData.rates.AUD;
		foreignIncome.textContent = `$${Math.floor(audIncome)}`;
		yourIncome.textContent = 'Australian dollars'
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		select.value = 'AUD'
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
	} else if (e.target.getAttribute('id') === 'uk-flag') {//convert to GBP
		//convert the taxes
		gbpTax = correctedTax * currencyData.rates.GBP;
		foreignTax.textContent = `\u00a3${Math.floor(gbpTax)}`;
		yourTax.textContent = 'British pounds'
		//convert the income
		gbpIncome = correctedIncome * currencyData.rates.GBP;
		foreignIncome.textContent = `\u00a3${Math.floor(gbpIncome)}`;
		yourIncome.textContent = 'British pounds'
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		select.value = 'GBP'
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
	} else if (e.target.getAttribute('id') === 'ire-flag') {//convert to EUR
		//convert the taxes
		eurTax = correctedTax * currencyData.rates.EUR;
		foreignTax.textContent = `\u20ac${Math.floor(eurTax)}`;
		yourTax.textContent = 'Euros'
		//convert the income
		eurIncome = correctedIncome * currencyData.rates.EUR;
		foreignIncome.textContent = `\u20ac${Math.floor(eurIncome)}`;
		yourIncome.textContent = 'Euros'
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		select.value = 'EUR'
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
	} else if (e.target.getAttribute('id') === 'nz-flag') {//convert to NZD
		//convert the taxes
		nzdTax = correctedTax * currencyData.rates.NZD;
		foreignTax.textContent = `$${Math.floor(nzdTax)}`;
		yourTax.textContent = 'New Zealand dollars'
		//convert the income
		nzdIncome = correctedIncome * currencyData.rates.NZD;
		foreignIncome.textContent = `$${Math.floor(nzdIncome)}`;
		yourIncome.textContent = 'New Zealand dollars'
		//set the classes
		foreignTax.className = 'tax-data'
		foreignIncome.className = 'income-data'
		select.value = 'NZD'
		currencyFlag.setAttribute('src', e.target.getAttribute('src'));
	} else {
		yourIncome.textContent = ''
		yourTax.textContent = ''
		foreignIncome.textContent = ''
		foreignTax.textContent = ''
		select.value = ''
		currencyFlag.setAttribute('src', '');
	}
}

flagBar.addEventListener('click', flagCurrency)