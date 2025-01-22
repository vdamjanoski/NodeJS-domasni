const fahrenheitToCelsius=(x)=>{
    return (((x - 32) * 5) / 9);
}

const celsiusToFahrenheit=(x)=>{
    return (x * 9) / 5 + 32;
}

const ploshtinaTriagolnik=(a, b, c)=>{
    const s = (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

const perimetarTriagolnik=(a, b, c)=>{
    return a+b+c;
}

const ploshtinaPravoagolnik=(sirina,visina)=>{
    return sirina * visina;
}

const perimetarPravoagolnik=(sirina, visina)=>{
    return 2 * (sirina + visina);
}

const isEven=(broj)=>{
    return broj % 2 === 0;
}

module.exports={
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    ploshtinaTriagolnik,
    ploshtinaPravoagolnik,
    perimetarTriagolnik,
    perimetarPravoagolnik,
    isEven,
}