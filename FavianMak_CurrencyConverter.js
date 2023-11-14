

//Object Currencies to store different exchange rates of a few currencies
let Currencies = {
    AUD: 1.14,
    Baht: 26.67,
    CAD: 1.02,
    Dong: 18023.15,
    Euro: 0.68,
    Franc: 0.66,
    HKD: 5.77,
    Krone:8.10,
    MYR: 3.45,
    Pound: 0.59,
    USD: 0.73,
    Won: 970.07,
    Yen: 111.34,
    
}

module.exports = {
    Currencies,

    //The function ConversionSGDtoDIffCurrency is to allow user to input what currency they want to change to
    //as well as input how much SGD they want to convert.
    ConversionSGDtoDiffCurrency(Currency, cashValue) {
        const exchangeRate = Currencies[Currency];
        const converted = cashValue * exchangeRate
        //.toFixed(2) rounds up value to 2 decimal points
        console.log(`The converted amount is ${converted.toFixed(2) + ` ` + Currency} `);
    },

    //The function ConversionDiffCurrencytoSGD is to allow user to input what currency they have
    //as well as input how much of the currency they want to convert to SGD.
    ConversionDiffCurrencytoSGD(Currency, cashValue) {
        const exchangeRate = Currencies[Currency];
        const converted = cashValue / exchangeRate
        //.toFixed(2) rounds up value to 2 decimal points
        console.log(`The converted amount is ${converted.toFixed(2)} SGD `);
    },

    //The function CurrencytoCurrency is to allow user to input what currency they have,
    //what currency you want to change to and how much of the currency they have
    CurrencytoCurrency(currency1, currency2, cashValue) {
        const exchangeRateFrom = Currencies[currency1];
        const exchangeRateTo = Currencies[currency2];
        const converted = (cashValue / exchangeRateFrom) * exchangeRateTo;
        console.log(`The converted amount is approximately ${converted.toFixed(2) + ` ` + currency2}`);
    },

    //Shows the rate of the currency
    CheckRate(currency) {
        console.log(`${currency + ' rate = ' + Currencies[currency]}`)
    },
    //The function CheckRateAllCurrencies is to allow user to see exchange rates of all currencies
    CheckRateAllCurrencies() {
        console.log('Currency Exchange Rates \n')
        console.log(Currencies);

    }
}