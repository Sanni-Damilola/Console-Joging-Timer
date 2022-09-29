const prompt = require("prompt-sync")();
console.log("Welcome to JoggerMan App, ");
let name = prompt("Please Enter your Name: ");

// console.log("");
console.log(`Good day ${name}, Good to have you back!`);

console.log("");

while (true) {
  let goal = parseInt(prompt("Please Enter your set GOAL: "));

  let entry = prompt(
    "Please Press Y to Continue or R to Reset your GOAL, otherwise Press Q to QUIT: "
  ).toUpperCase();

  if (entry === "Q") {
    console.log(`Wow... it really saddens my heart to see you go ${name}!`);
    break;
  } else if (entry === "R") {
    console.log(`Wanna reset your GOAL... let's do this!`);
    continue;
  } else if (entry === "Y") {
    while (true) {
      console.log("");
      console.log(`Your set Jogging GOAL is ${goal}mins!`);
      let start = parseInt(prompt("How do you want to jog for: "));

      //   if (start >= goal) {
      //     console.log("Your start point is Impossible...!");
      //     continue;
      //   }
      if (goal <= 0) {
        console.log(`Congratulations... You've achieved your GOAL `);
        break;
      }
      goal = goal - start;
      console.log(
        `Awesome Ninja... you have ${goal}mins left togo \nLet's do this!`
      );
    }
  }
  break;
}
