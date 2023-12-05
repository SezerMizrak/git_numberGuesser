// first lets create a random selector so when we create arrays with random string
// it will select randomly everytime

const randomSelector = Math.floor(Math.random());

// lets create our random arrays 
const singsofZodiac = {
  sings: ["Aries", "Taurus", "Gemini","Cancer","Leo","Virgo","Libra","Scorpius","Sagittarius","Capricornus","Aquarius","Pisces"],
  favoriteWords: ["When","Basically","Interesting","Seriously","What","Okay","Maybe","Really","Obviously","Right","No","Whatever"],
  todo: ["Do That","Do Not Do That","Maybe Do That","Maybe dont do that","Definitely do it"]
}
const randomStrings = () =>{
  for (let i = 0; i<singsofZodiac.length; i++){
    switch(param) {
      case sings:
        console.log(`Your zodiac sign is ${sings[Math.floor(Math.random())*sings.length]}`);
        break;
      case favoriteWords:
        console.log(`Your favorite word is ${favoriteWords[Math.floor(Math.random())*favoriteWords.length]}`);
        break;
      case todo:
        console.log(`I think you  ${todo[Math.floor(Math.random())*todo.length]}`);
        break;
      default:
        break;
    }
  }
}