//? domasna.js ime na modulot 
//? FARENHAJT VO CELZIUS I OBRATNO
//? PLOSTINA I PERIMETAR NA TRIAGOLNIK I NA PRAVOAGOLNIK
//? F-JA SHTO PROVERUA DALI NEKOJ BROJ E PAREN ILI NE
const funkcii= require(`./funkcii.js`);
const fToC=funkcii.fahrenheitToCelsius(60);
console.log(fToC)
const cToF=funkcii.celsiusToFahrenheit(10);
console.log(cToF)
const ploshtinaTriagolnik=funkcii.ploshtinaPravoagolnik(10,12,11);
console.log(ploshtinaTriagolnik)
const perimetarTriagolnik=funkcii.perimetarTriagolnik(10,12,11);
console.log(perimetarTriagolnik)
const ploshtinaPravoagolnik=funkcii.ploshtinaPravoagolnik(10,20);
console.log(ploshtinaPravoagolnik)
const perimetarPravoagolnik=funkcii.perimetarPravoagolnik(10,20);
console.log(perimetarPravoagolnik)
const isEven=funkcii.isEven(78);
console.log(isEven)