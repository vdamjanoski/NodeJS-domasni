const studenti = [
  { ime: "Pero", prosek: 7.1, grad: "Berovo" },
  { ime: "Stojko", prosek: 6, grad: "Kavadarci" },
  { ime: "Stojna", prosek: 10, grad: "Veles" },
  { ime: "Mara", prosek: 5, grad: "Kichevo" },
  { ime: "Petka", prosek: 8.3, grad: "Skopje" },
  { ime: "Mitre", prosek: 7.5, grad: "Ohrid" },
  { ime: "Risto", prosek: 9, grad: "Strumica" },
  { ime: "Tosho", prosek: 8.3, grad: "Gevgelija" },
];

// DA se presmetat vkupniot prosek na site studenti
const sobiranjeProsek = studenti.reduce((sum, student) => {
  return sum + student.prosek;
}, 0)/studenti.length;
console.log(`Celosniot prosek na celata grupa e: ${sobiranjeProsek.toFixed(1)}`
);
// da se isfiltriraat site studenti sto imaat pomalku od 4 ednakvo so 4 karakteri
const filtriraniStudenti = studenti.filter((s) => {
  return s.ime.length <= 4;
});
console.log(filtriraniStudenti);
// Da se pronajdit studentot od Strumica
const studentFind = studenti.find((s) => {
  return s.grad === "Strumica";
});
console.log(studentFind);
// da kreirate horoskop funkcija - parametar mesec(bonus i denovi)
const horoskop = [
  { znak: "Jarec", mesec: "Januari" },
  { znak: "Vodolija", mesec: "Fevruari" },
  { znak: "Riba", mesec: "Mart" },
  { znak: "Oven", mesec: "April" },
  { znak: "Bik", mesec: "Maj" },
  { znak: "Bliznaci", mesec: "Juni" },
  { znak: "Rak", mesec: "Juli" },
  { znak: "Lav", mesec: "Avgust" },
  { znak: "Devica", mesec: "Septemvri" },
  { znak: "Vaga", mesec: "Oktomvri" },
  { znak: "Skorpija", mesec: "Noemvri" },
  { znak: "Strelec", mesec: "Dekemvri" },
];
horoskop.forEach(s => {
  if (s.mesec=="Januari"){
    console.log(s.znak);
  }else if(s.mesec=="Fevruari"){
    console.log(s.znak)
  }else if(s.mesec=="Mart"){
    console.log(s.znak)
  }else if(s.mesec=="April"){
    console.log(s.znak)
  }else if(s.mesec=="Maj"){
    console.log(s.znak)
  }else if(s.mesec=="Juni"){
    console.log(s.znak)
  }else if(s.mesec=="Juli"){
    console.log(s.znak)
  }else if(s.mesec=="Avgust"){
    console.log(s.znak)
  }else if(s.mesec=="Septemvri"){
    console.log(s.znak)
  }else if(s.mesec=="Oktomvri"){
    console.log(s.znak)
  }else if(s.mesec=="Noemvri"){
    console.log(s.znak)
  }else if(s.mesec=="Dekemvri"){
    console.log(s.znak)
  }
});
function horoskopskiZnaci(den,mesec){
  var sign;
  switch(mesec){
    case 1:
      if (den<=19){
        sign="Capricornus";
      }else{
        sign="Aquarius"
      }break;
      case 2:
        if(den<=18){
          sign="Aquarius"
        }else{
          sign="Pisces"
        }break;
      case 3:
        if(den<=20){
          sign="Pisces"
        }else{
          sign="Aries"
        }break;
      case 4:
        if(den<=19){
          sign="Aries"
        }else{
          sign="Taurus"
        }break;
      case 5:
        if(den<=20){
          sign="Taurus"
        }else{
          sign="Gemini"
        }break;
      case 6:
        if(den<=21){
          sign="Gemini"
        }else{
          sign="Cancer"
        }break;
      case 7:
  //       if()
  // }
}}
//da kreirame funkcija sto presmetuvat plostina na pravoaglonik
plostinaNaPravoagolnik=(a,b)=>a*b;
console.log(plostinaNaPravoagolnik(10,5))
// da kreirame funkcija sto presmetuva perimetar na pravoagolnil
perimetarNaPravoagolnik=(a,b)=>2*a+2*b;
console.log(perimetarNaPravoagolnik(10,5));
