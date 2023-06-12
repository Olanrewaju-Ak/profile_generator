const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  profile.name = name;

  rl.question("What's an activity you like doing?", (activity) => {
    profile.activity = activity;

    rl.question("What do you listen to while doing that?", (music) => {
      profile.music = music;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        profile.meal = meal;

        rl.question("What's your favourite thing to eat for that meal?", (food) => {
          profile.food = food;
          rl.question("Which sport is your absolute favourite?", (sport) => {
            profile.sport = sport;
            rl.question(
              "What is your superpower? In a few words, tell us what you are amazing at!",
              (fact) => {
                profile.fact = fact;

                console.log(
                  `${profile.name} loves listening to ${profile.music} while ${profile.activity}, devouring ${profile.food} for ${profile.meal}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.fact}`
                );
                rl.close();
              }
            );
          });
        });
      });
    });
  });
});
