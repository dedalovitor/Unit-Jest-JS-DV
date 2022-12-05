// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



// fromEuroToDollar function

const fromEuroToDollar = (x) =>{

    return x * oneEuroIs.USD;
};


// fromDollarToYen function: 106,58

const fromDollarToYen = (y) =>{

    return y * (oneEuroIs.JPY / oneEuroIs.USD);
};



// fromYenToPound function: 0,00625

const fromYenToPound = (p) =>{

    return p * (oneEuroIs.GBP / oneEuroIs.JPY);
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}; //la exportación de módulos debe de ir al final para que funcione 

console.log(fromEuroToDollar(200));
console.log(fromDollarToYen(200));
console.log(fromYenToPound(200));