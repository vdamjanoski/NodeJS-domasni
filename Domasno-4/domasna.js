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



//? - Treba da se izbrise student od fajlot



//? 4. Nizata od js niza/objekt treba da bide konertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile
const readWrite = await import("./ReadWrite.js");
const fs = import("fs");
// 1
(async () => {
  try {
     //? 1. Da ja vhitate celata sodrzina od fajlot | fs.readFile
    const studentsData = await readWrite.fileRead('studenti.json');
    console.log(studentsData);
    //? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza / objekt | JSON.parse
    const studenti = JSON.parse(studentsData);
    console.log(studenti);
    //? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
    const newStudent = {
                    "reden broj": "13",
                    "ime": "Petar",
                    "grad": "Tetovo",
                    "prosek": 8
                };
    studenti.push(newStudent);
    console.log(studenti);
    //? 4. Nizada od js niza/objekt treba da bide konvertirana vo tekst | JSON.strinfify
    const konvertiranaNiza = JSON.stringify(studenti);
    console.log(konvertiranaNiza);
    //? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile
    // await readWrite.fileWrite(`studenti.json`,konvertiranaNiza);
  } catch (err) {
    console.log(err);
  }
})();
// 2
(async () => {
    try {
       //? 1. Da ja vhitate celata sodrzina od fajlot | fs.readFile
      const studentsData2 = await readWrite.fileRead('studenti.json');
      console.log(studentsData2);
      //? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza / objekt | JSON.parse
      const students = JSON.parse(studentsData2);
      console.log(students);
     // 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodveteniot clen | Array.map
        const mapStudents = students.map((student, index) => {
        if (index === students.length - 1) {
            return { ...student, ime: 'AAB' };
        }
        return student;
    });
    console.log(mapStudents);
    //? 4. Nizada od js niza/objekt treba da bide konvertirana vo tekst | JSON.strinfify
        const tekstNiza = JSON.stringify(mapStudents);
        console.log(tekstNiza);
      //? 5. Tekstot treba da bide zacuvan vo fajlot | fs.writeFile
      // await readWrite.fileWrite(`studenti.json`,mapStudents);
    } catch (err) {
      console.log(err);
    }
  })();

  // 3

  (async () => {
    try {
    //? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
    const studentsData3 = await readWrite.fileRead(`studenti.json`);
    console.log(studentsData3);
    //? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
    const newStudents = JSON.parse(studentsData3);
    console.log(newStudents);
    //? 3. Da gi izminite site elementi vo nizata i da go izbrishite samo soodvetniot clen | Array.filter
    const filteredNiza = newStudents.filter(student=>student[`reden broj`]!==`12`)
    console.log(filteredNiza);
    //? 4. Nizata od js niza/objekt treba da bide konertirana vo tekst | JSON.stringify
    const stringNiza = JSON.stringify(filteredNiza);
    console.log(stringNiza);
    //? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile
    // const finalnaNiza3 = await readWrite.fileWrite(`studenti.json`, stringNiza)
    } catch (err) {
      console.log(err);
    }
  })();

