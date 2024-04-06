
import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random()* 6 + 1);


const answers = await inquirer.prompt([
    {
        name:"userguessednumber",
        type: "number",
        message: "guess your number between 1 - 6:",
    },
]);

if(answers.userguessednumber  ===  randomNumber)
    {
        console.log("congtratulation! you win, your guessed is right number");
    }
    else { console.log("oohhoo! sorry you are guessed wrong number")};
    console.log(randomNumber);








