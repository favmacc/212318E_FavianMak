const readline = require("readline");
const cc = require("./FavianMak_CurrencyConverter")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//Allow user to choose what task they wanted to do
let questions = "\n What do you want to do:\n" +
    "1. Convert SGD to Specific Currency\n" +
    "2. Convert Specific Currency to SGD\n" +
    "3. Convert Currency to Currency (Non SGD)\n" +
    "4. Check Rate of Specific Currency\n" +
    "5. Check History of exchanges\n" +
    "==========================\n";

//Based on option chosen, a certain function will be used
let handleOption = function (option) {
    switch (+option) {
        case 1:
            console.log('These are the current currencys available ' + JSON.stringify(Object.keys(cc.Currencies)))

            rl.question('Enter Currency Choice: ', (currency) => {

                //if the key in this case currency exists in the object Currencies
                if (cc.Currencies.hasOwnProperty(currency)) {
                    rl.question(`How much(SGD) would you like to convert to ${currency}: `, (cash) => {
                        //Number() converts input into float value
                        const cashValue = parseFloat(cash)
                        //if value typed is a number
                        if (!isNaN(cashValue)) {
                            cc.ConversionSGDtoDiffCurrency(currency, cashValue)
                            rl.question(questions, handleOption);
                        }
                        //if value typed in is not a number
                        else {
                            console.log('PLEASE ENTER A VALID INPUT \n');
                            rl.question(questions, handleOption);
                        }

                    })
                }
                //Questions reappear if else statement is triggered
                else { console.log('PLEASE ENTER A VALID CURRENCY \n'); rl.question(questions, handleOption); }
            })
            break;
        case 2:
            console.log('These are the current currencys available ' + JSON.stringify(Object.keys(cc.Currencies)))

            rl.question('Enter Currency you want to convert to SGD: ', (currency) => {
                //if the key in this case currency exists in the object Currencies
                if (cc.Currencies.hasOwnProperty(currency)) {
                    rl.question(`How much(${currency}) would you like to convert to SGD: `, (cash) => {
                        //Number() converts input into float value
                        const cashValue = parseFloat(cash)
                        //use function ConversionDiffCurrencytoSGD
                        cc.ConversionDiffCurrencytoSGD(currency, cashValue)
                        rl.question(questions, handleOption);
                    })
                }

                else { console.log('PLEASE ENTER A VALID CURRENCY \n'); rl.question(questions, handleOption); }
            })
            break;
        case 3:

            console.log('These are the current currencys available ' + JSON.stringify(Object.keys(cc.Currencies)))
            //Allow user to type in currency they have
            rl.question(`Whats the Currency you have that you want to convert: `, (currency1) => {
                if (cc.Currencies.hasOwnProperty(currency1)) {
                    console.log('These are the current currencys available ' + JSON.stringify(Object.keys(cc.Currencies)))
                    //Allow user to type in currency they want to change to
                    rl.question(`Whats currency you want convert from ${currency1}: `, (currency2) => {
                        //Allow user to type in amount they want to change to
                        if (cc.Currencies.hasOwnProperty(currency2)) {
                            rl.question(`How much ${currency1} would you like to convert to ${currency2}: `, (cash) => {
                                const cashValue = parseFloat(cash)
                                cc.CurrencytoCurrency(currency1, currency2, cashValue);
                                rl.question(questions, handleOption);
                            })
                        }
                        //This happens when user types in currency that does not exist in the object Currencies
                        else { console.log('PLEASE ENTER A VALID CURRENCY \n'); rl.question(questions, handleOption); }
                    })
                }
                else { console.log('PLEASE ENTER A VALID CURRENCY \n'); rl.question(questions, handleOption); }
            })
            break;
        case 4:
            console.log('These are the current currencys available ' + JSON.stringify(Object.keys(cc.Currencies)))
            //Allow user to type in currency they have
            rl.question(`What Currency rate do you want to check: `, (currency) => {
                    cc.CheckRate(currency)
                    rl.question(questions, handleOption);
            })
            break;
        case 5:
            cc.CheckHistory();
            rl.question(questions, handleOption);
            break;
    }
}

//Object Currencies to store different exchange rates of a few currencies
rl.question(questions, handleOption);
