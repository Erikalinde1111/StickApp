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
//skall sätta person objectet
export function hello(x) {
  person = x;
  calcFront();
}

export function patternType(y) {
  pattern = y;
}

export function pattern() {
  console.log("Kollar");
  Actions.showPattern({stitches: (nrOfStitches)});
}

function calcFront() {
  nrOfStitches = Math.round( ((person.hip)/10)* stitchesRowGauge)
  lengthToShoulder = person.totalLength - person.lengthToArmpit
  console.log("Lägg upp antalet maskor: "+ nrOfStitches);
  console.log("Markera första maskan med en markör och markera sedan maskan på plats "+ (nrOfStitches)/2 + " med en markör och anslut maskorna till en ring");
  console.log("Sticka runt tills arbetet mäter: "+ person.lengthToArmpit);
  console.log("Sätt av "+ (nrOfStitches)/2 + " på en tråd och sticka maskorna på stickan från rätsidan");
  console.log("Börja från sidan och sticka "+(lengthToShoulder - 8) + " cm");
  nrOfStShoulders = ( ((nrOfStitches/2) /2) - 15 )
  console.log("Börja från sidan och sticka "+ nrOfStShoulders);
  console.log("Sätt av nästkommande "+ (15*2) + " maskor på en tråd och sticka resterande " + nrOfStShoulders + " och minska sedan 1 maska på vartannant varv 12 gånger från halsringningen");
  console.log("Gör spegelvänt på andra axeln");
  console.log("Du har nu stickat framstycket");
}



//Hur skall dtta visas upp i vyn förslag är att en ritning på framstycket visas först eftersom det är det som räknas ut först av calcFront



//Halsringningen mäter för vuxna 12cm mot nyckelbenet och 24cm mot halsen får därför 15 maskor för 6cm
//ärmlängden anges i procent dvs 1.0 för hellång 0.5 för halvlång 0.25 för kortärmad
