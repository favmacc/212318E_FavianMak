# Assignment 1
## How to use
Open Terminal through View > Terminal  
In the terminal, execute 'node app.js'  
A console will pop up in the terminal, allowing the user to choose what task they want to do by typing in the number in the terminal related to what task they want to do which will use a specific function listed below to show the output
>Example of how the console looks like:
>  
>What do you want to do:
>1. Convert SGD to Specific Currency  
>2. Convert Specific Currency to SGD  
>3. Convert Currency to Currency (Non SGD)  
>4. Check Rate of Specific Currency  
>5. Check History of exchanges  
>==========================  
>
Based on the task chosen, follow-up questions will be asked to the user which the user will be able to answer in the terminal


## Functions

`StoreHistory` This function is used to store the history of conversions done by the user and is used in functions related to exchanging currency  
> `ConversionSGDtoDiffCurrency` `ConversionDiffCurrencytoSGD` and `CurrencytoCurrency` are functions which use `StoreHistory`
>
  
`ConversionSGDtoDiffCurrency` This function is used to convert SGD to a currency of the user's choice  
  
`ConversionDiffCurrencytoSGD` This function is used to convert the currency of the user's choice to SGD  
  
`CurrencytoCurrency` This function is used to convert two currencies of the user's choice from one to another
> Example: Baht to Yen
>
  
`CheckRate` This function is used to allow the user to check the rate of a specific currency of their choice 
  
`CheckHistory` This function is used to allow the user to see the history of their conversions  



