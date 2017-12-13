// för att få rätt stickfasthet för en provlapp på 10 x 10 cm
//skall antalet masker vara 25 och antalet rader vara 30
//2.5 maskor per cm
import { Actions } from 'react-native-router-flux';
const stitchesRowGauge = 25;
const rowsGauge = 30;
var person = {};
var pattern = {};
var nrOfStitches = 0;
var lengthToShoulder = 0;
var nrOfStShoulders = 0;
var steg1 = "";
var steg2 = "";
var steg3 = "";
var steg4 = "";
//skall sätta person objectet
export const choosePerson = (chosenPerson) => {
  person = chosenPerson;
  calcFront();
}

export const patternType = (chosenPattern) => {
  pattern = chosenPattern;
}

export const goToPattern = () => {
  Actions.showPattern({steg1: (steg1), steg2: (steg2), steg3: (steg3), steg4: (steg4)});
}

function calcFront() {
  nrOfStitches = Math.round( ((person.hip)/10)* stitchesRowGauge)
  lengthToShoulder = person.totalLength - person.lengthToArmpit
  nrOfStShoulders = ( ((nrOfStitches/2) /2) - 15 )

  steg1 = "Lägg upp antalet maskor: "+ nrOfStitches + " Markera första maskan med en markör och markera sedan maskan på plats "+ (nrOfStitches)/2 + " med en markör och anslut maskorna till en ring"
  steg2 = "Sticka runt tills arbetet mäter: "+ person.lengthToArmpit + " Sätt av "+ (nrOfStitches)/2 + " på en tråd och sticka maskorna på stickan från rätsidan"
  //console.log("Sticka runt tills arbetet mäter: "+ person.lengthToArmpit);
  //console.log(" Sätt av "+ (nrOfStitches)/2 + " på en tråd och sticka maskorna på stickan från rätsidan");
  steg3 = "Börja från sidan och sticka "+(lengthToShoulder - 8) + " cm "+ " samtidigt som du från sidan stickar "+ nrOfStShoulders + " Sätt av nästkommande "+ (15*2) +
  " maskor på en tråd och sticka resterande " + nrOfStShoulders + " och minska sedan 1 maska på vartannant varv 12 gånger från halsringningen"
  //console.log("Börja från sidan och sticka "+(lengthToShoulder - 8) + " cm");

  //console.log("Börja från sidan och sticka "+ nrOfStShoulders);
  //console.log("Sätt av nästkommande "+ (15*2) + " maskor på en tråd och sticka resterande " + nrOfStShoulders + " och minska sedan 1 maska på vartannant varv 12 gånger från halsringningen");
  steg4 = "Gör spegelvänt på andra axeln. Du har nu stickat framstycket"
  //console.log("Gör spegelvänt på andra axeln");
  //console.log("Du har nu stickat framstycket");
}



//Hur skall dtta visas upp i vyn förslag är att en ritning på framstycket visas först eftersom det är det som räknas ut först av calcFront



//Halsringningen mäter för vuxna 12cm mot nyckelbenet och 24cm mot halsen får därför 15 maskor för 6cm
//ärmlängden anges i procent dvs 1.0 för hellång 0.5 för halvlång 0.25 för kortärmad
