// för att få rätt stickfasthet för en provlapp på 10 x 10 cm
//skall antalet masker vara 25 och antalet rader vara 30

const stitchesRowGauge = 25 / 10;
const rowsGauge = 30 / 10;
var person = {};
//skall sätta person objectet
export function hello(x) {
  person = x;
  calc();
}

function calc() {
  console.log("personen "+person.hip);
}





//ärmlängden anges i procent dvs 1.0 för hellång 0.5 för halvlång 0.25 för kortärmad
