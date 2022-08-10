const { Console } = require("console");
const { create } = require("domain");
const fs = require("fs");
require("dotenv").config();
const oneLinerJoke = require("one-liner-joke");

let jokesArray = [];
const jokeAmount = process.env.JOKE_AMOUNT || 50;
const jokeSubject = process.env.JOKE_SUBJECT;

fs.writeFile(`created_files/jokes.txt`, "", (err) => {
    if (err) 
        Console.log("can't create file");
}
);

if (Number(jokeAmount) < 50)
    console.error("jokes amount is less than 50");

for (let i = 0; i < Number(jokeAmount); i++) {

  let joke = oneLinerJoke.getRandomJokeWithTag(jokeSubject).body;

  while (jokesArray.includes(joke))
    joke = oneLinerJoke.getRandomJokeWithTag(jokeSubject).body;

  jokesArray[i] = joke.body;

  fs.appendFile(`created_files/jokes.txt`, joke + '\n', (err) => {
    if (err)
        console.log(err);
    if (joke === undefined || joke == null)
        console.error("jokes subject doesnt exist");
    else {
      console.log(`success!!!`);
    }
  });
}
