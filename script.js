/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  var spila = confirm('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
  while (spila){
    play()
    spila = confirm('Spila annan leik?');
  }
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let start = new Date();
  let fjoldi = 0;
  for(let i = 0; i < GAMES_TO_PLAY; i = i + 1){
    var spurja = ask()
    if (spurja == null){
      confirm('Hætt í leik.')
      return;
    }
    else if (spurja) {
      fjoldi = fjoldi+1;
    }
  }
  let end = new Date();
  let timi = Math.round((end-start)/10)/100;
  confirm('Þú svaraðir ' + fjoldi + ' af ' + GAMES_TO_PLAY + ' dæmum rétt á ' + timi + ' sekúndum\nMeðalrétt svör á sekúndu eru ' + Math.round(fjoldi*100/timi)/100);

}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  let spurning = question().split(",");
  let svar = prompt('Hvað er '+spurning[0]+'?')
  if (svar == null){
    return null;
  }
  else if (parseInt(svar, 10)==parseInt(spurning[1], 10)){
    return 'blúbb';
  }
  else {
    return false;
  }
}

function question() {
  let virki = randomNumber(1,4).toString();
  var s,a,b,c;
  switch(virki){
    case '1':
      a = randomNumber(1,100);
      b = randomNumber(1,100);
      c = a+b;
      s = a.toString() + '+' + b.toString() + ',' + c.toString();
      break;
    case '2':
      a = randomNumber(1,100);
      b = randomNumber(1,100);
      c = a-b;
      s = a.toString() + '-' + b.toString() + ',' + c.toString();
      break;
    case '3':
      a = randomNumber(1,10);
      b = randomNumber(1,10);
      c = a*b;
      s = a.toString() + '*' + b.toString() + ',' + c.toString();
      break;
    case '4':
      b = randomNumber(2,10);
      a = randomNumber(2,10)*b;
      c = a/b;
      s = a.toString() + '/' + b.toString() + ',' + c.toString();
      break;
  }
  return s;
}


/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
