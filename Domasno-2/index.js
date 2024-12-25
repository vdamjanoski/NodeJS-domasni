const studenti = [
    { ime: "Pero", prosek: 7.1, grad: "Berovo" },
    { ime: "Stojko", prosek: 6, grad: "Kavadarci" },
    { ime: "Stojna", prosek: 10, grad: "Veles" },
    { ime: "Mara", prosek: 5, grad: "Kichevo" },
    { ime: "Mitre", prosek: 7.5, grad: "Ohrid" },
    { ime: "Risto", prosek: 9.5, grad: "Strumica" },
    { ime: "Tosho", prosek: 8.3, grad: "Gevgelija" },
    { ime: "Stefan", prosek: 9.5, grad: "Skopje" },
    { ime: "Petka", prosek: 8.3, grad: "Skopje" },
    { ime: "Stefanija", prosek: 8, grad: "Skopje" },
    { ime: "Aleksandar", prosek: 8, grad: "Kumanovo" },
    { ime: "Ema", prosek: 6.8, grad: "Ohrid" },
    { ime: "Aleksandra", prosek: 8.3, grad: "Ohrid" },
    { ime: "Sandra", prosek: 8.3, grad: "Kumanovo" },
    { ime: "Nikola", prosek: 10, grad: "Skopje" },
    { ime: "Filip", prosek: 7.2, grad: "Strumica" },
    { ime: "Vladimir", prosek: 7.5, grad: "Veles" },
    { ime: "Oleg", prosek: 9, grad: "Struga" },
    { ime: "Damjan", prosek: 9, grad: "Skopje" },
  ];

//1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
//? 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
//? 4. Вкупен просек на студенти кои се од Куманово
//? 5. Просек на просеците од градовите Скопје и Охрид
//? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
//? 7. Да се избрише првиот студент во студенти
//? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)
//1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
const studentiPrvaZadaca = studenti.filter(student => student.grad == "Skopje" && student.ime.endsWith("a") && student.prosek >= 7)
console.log(studentiPrvaZadaca);
const studentiPrvaZadacaSorted = studentiPrvaZadaca.sort((a, b) => a.ime - b.ime);
console.log(studentiPrvaZadacaSorted);
//? 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
const studentiVtoraZadaca=studenti.filter(student => student.grad != "Skopje" && student.prosek >= 9)
console.log(studentiVtoraZadaca);
const studentiVtoraZadacaSorted=studentiVtoraZadaca.sort((a, b) => a.prosek - b.prosek);
console.log(studentiVtoraZadacaSorted);
//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
const studentiTretaZadaca=studenti.filter(student => student.ime.length == 5)
console.log(studentiTretaZadaca);
const studentiTretaZadacaSorted=studentiTretaZadaca.sort((a, b)=> b.prosek - a.prosek).slice(0,3)
console.log(studentiTretaZadacaSorted);
//? 4. Вкупен просек на студенти кои се од Куманово
const studentiCetvrtaZadaca=studenti.filter(student => student.grad=="Kumanovo")
const sobiranjeProsekKumanovo=studentiCetvrtaZadaca.reduce((sum, student) => {
    return sum + student.prosek;
  }, 0)
  console.log(`Sobiranje prosek Kumanovo:`,sobiranjeProsekKumanovo.toFixed(2));
//? 5. Просек на просеците од градовите Скопје и Охрид
  const studentiPettaZadaca=studenti.filter(student => student.grad=="Skopje" || student.grad=="Ohrid")
  const prosekPettaZadaca=studentiPettaZadaca.reduce((sum, student) =>{
    return sum + student.prosek;
  },0)/studentiPettaZadaca.length;
  console.log(`Prosek petta zadaca:`,prosekPettaZadaca.toFixed(2));
//? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево
  const obj1={ime: "Goran", prosek: 7.3, grad: "Delcevo",
  }
  const studenti1={studenti,obj1}
  console.log(studenti1);

//? 7. Да се избрише првиот студент во студенти
const sedmaZadaca= studenti.shift();
console.log(sedmaZadaca);
//? 8. Да се креира нов array каде што студентите од Охрид и Куманово каде што оценките со просек се за 1 поголем(Динамички)
const osmaZadaca=studenti.filter(student => student.grad=="Ohrid" || student.grad=="Kumanovo");
console.log(osmaZadaca);
const rezultat= osmaZadaca.map((student=>{student.prosek+1}))
console.log(rezultat);






  
  
  
  

