

//Object Currencies to store different exchange rates of a few currencies
let Currencies = {
    AUD: 1.14,
    Baht: 26.67,
    CAD: 1.02,
    Dong: 18023.15,
    Euro: 0.68,
    Franc: 0.66,
    HKD: 5.77,
    Krone: 8.10,
    MYR: 3.45,
    Pound: 0.59,
    USD: 0.73,
    Won: 970.07,
    Yen: 111.34,

}
let ConversionHistory = [];
module.exports = {
    Currencies,
    ConversionHistory,
    //The function ConversionSGDtoDIffCurrency is to allow user to input what currency they want to change to
    //as well as input how much SGD they want to convert.
    ConversionSGDtoDiffCurrency(ToCurrency, cashValue) {
        const exchangeRate = Currencies[ToCurrency];
        const converted = cashValue * exchangeRate
        const convert2dp = converted.toFixed(2);
        //.toFixed(2) rounds up value to 2 decimal points
        console.log(`The converted amount is ${convert2dp + ` ` + ToCurrency} `);
        const history = {
            FromCurrency: 'SGD',
            ToCurrency,
            cashValue,
            convertedAmount: convert2dp,
            timestamp: new Date().toLocaleString() // Store the timestamp of the conversion
        };
        ConversionHistory.push(history);

    },

    //The function ConversionDiffCurrencytoSGD is to allow user to input what currency they have
    //as well as input how much of the currency they want to convert to SGD.
    ConversionDiffCurrencytoSGD(FromCurrency, cashValue) {
        const exchangeRate = Currencies[FromCurrency];
        const converted = cashValue / exchangeRate
        const convert2dp = converted.toFixed(2);
        //.toFixed(2) rounds up value to 2 decimal points
        console.log(`The converted amount is ${convert2dp} SGD `);

        const history = {
            FromCurrency,
            ToCurrency: 'SGD',
            cashValue,
            convertedAmount: convert2dp,
            timestamp: new Date().toLocaleString() // Store the timestamp of the conversion
        };
        ConversionHistory.push(history);
    },

    //The function CurrencytoCurrency is to allow user to input what currency they have,
    //what currency you want to change to and how much of the currency they have
    CurrencytoCurrency(FromCurrency, ToCurrency, cashValue) {
        const exchangeRateFrom = Currencies[FromCurrency];
        const exchangeRateTo = Currencies[ToCurrency];
        const converted = (cashValue / exchangeRateFrom) * exchangeRateTo;
        const convert2dp = converted.toFixed(2);
        //To contain info about exchange

        console.log(`The converted amount is approximately ${convert2dp + ` ` + currency2}`);
        const history = {
            FromCurrency,
            ToCurrency,
            cashValue,
            convertedAmount: convert2dp,
            timestamp: new Date().toLocaleString() // Store the timestamp of the conversion
        };
        //Pushes it into a array to allow to track history of conversions
        ConversionHistory.push(history);
    },

    //Shows the rate of the currency
    CheckRate(currency) {
        console.log(`${currency + ' rate = ' + Currencies[currency]}`)
    },
    //The function CheckRateAllCurrencies is to allow user to see exchange rates of all currencies
    CheckHistory() {
        console.log('History of Exchanges: \n')
        console.log(ConversionHistory);
    },
}