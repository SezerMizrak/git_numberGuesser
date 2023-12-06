// first lets create a random selector so when we create arrays with random string
// it will select randomly everytime

const randomSelector = Math.floor(Math.random());

// lets create our random arrays 
const singsofZodiac = {
  sings: ["Aries", "Taurus", "Gemini","Cancer","Leo","Virgo","Libra","Scorpius","Sagittarius","Capricornus","Aquarius","Pisces"],
  favoriteWords: ["When","Basically","Interesting","Seriously","What","Okay","Maybe","Really","Obviously","Right","No","Whatever"],
  todo: ["Do That","Do Not Do That","Maybe Do That","Maybe dont do that","Definitely do it"]
}

/* i think the logic for the random selection is having problems while to switch cases are correct
i did not include how we are going to select which randomstring we need to choose with signsofZodiac
i should think about how to approach this */
const randomStrings = (singsofZodiac) =>{
  for (zodiac in singsofZodiac){
    switch(zodiac) {
      case singsofZodiac.sings:
        return console.log(`Your zodiac sign is ${singsofZodiac.sings[randomSelector*singsofZodiac.sings.length]}`);
        break;
      case singsofZodiac.favoriteWords:
         return console.log(`Your favorite word is ${singsofZodiac.favoriteWords[randomSelector*singsofZodiac.favoriteWords.length]}`);
        break;
      case singsofZodiac.todo:
         return console.log(`I think you  ${singsofZodiac.todo[randomSelector*singsofZodiac.todo.length]}`);
        break;
      default:
        break;
    }
  }
}

randomStrings(singsofZodiac);

console.log(singsofZodiac.sings[0]);