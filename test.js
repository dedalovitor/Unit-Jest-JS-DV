// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const {fromEuroToDollar } = require('./app.js')
    
    // x
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("One dollar should be 106.58 yens", function(){
    // importo la funcion desde app.js
    const {fromDollarToYen} = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(3.5*(oneEuroIs.JPY / oneEuroIs.USD));
})

test("One yen = one GBP", function(){
    // importo la funcion desde app.js
    const {fromYenToPound} = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(3.5*(oneEuroIs.GBP / oneEuroIs.JPY));
})
