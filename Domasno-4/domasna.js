//? Studenti [reden broj, ime, prezime, prosek, grad]
//? dodavanje na student vo fajlot
//? Brishenje na student od fajlot
//? menuvanje na podatoci na student od fajlot
//? chitanje na site studenti od fajlot

//? - Treba da dodademe student vo fajlot






//? - Imeto na studentot treba da bide smenet od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodveteniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile

//? - Treba da se izbrise student od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite samo soodvetniot clen | Array.filter
//? 4. Nizata od js niza/objekt treba da bide konertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile
const readWrite = await import("./ReadWrite.js");
const fs = import("fs");

const student = `{"reden broj": "13","ime": "NovStudent","grad": "Bitola","prosek": 7}`;
console.log(student);
//? 1. Da ja vhitate celata sodrzina od fajlot | fs.readFile
const readStudenti = await readWrite.fileRead(`studenti.json`);
console.log(readStudenti);
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza / objekt | JSON.parse
const convertedArray = JSON.parse(readStudenti);
console.log(convertedArray);
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
const plusStudent = convertedArray.push(student);
console.log(convertedArray);
//? 4. Nizada od js niza/objekt treba da bide konvertirana vo tekst | JSON.strinfify
const novaNiza = JSON.stringify(convertedArray);
console.log(novaNiza);
//? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile
(async ()=>{
    try{
        await readWrite.fileWrite('studenti.json', JSON.stringify(novaNiza));
    }catch (err){
        console.log(err);
    }
})


