
// a function that give a random numb out of alist of number ( in this case 3 numbes ( 1,2 and 3)) 
function random(numbers) {
    return numbers[Math.floor(Math.random()*numbers.length)];
}


function getComputerChoice(ch){


    if (ch == 1){
        return "rock"
    }
    else if ( ch == 2 ){
        return "paper"
    }
    else if ( ch == 3){
        return "scissors"
    }
}




 function playround(humanchoice) {

    if (humanchoice === getComputerChoice(random([1, 2, 3]))) {
        return "Tie"

    }

    if (humanchoice === "rock") {
        if (getComputerChoice(random([1, 2, 3])) === "scissors")
            return "you won"
    }
    if (humanchoice === "paper") {
        if (getComputerChoice(random([1, 2, 3])) === "rock")
            return "you won"
    }
    if (humanchoice === "scissors") {
        if (getComputerChoice(random([1, 2, 3])) === "paper")
            return "you won"
    }
   
    if (humanchoice === "scissors") {
        if (getComputerChoice(random([1, 2, 3])) === "rock")
            return "computer won"
    }
    if (humanchoice === "rock") {
        if (getComputerChoice(random([1, 2, 3])) === "paper")
            return "computer won"
    }
    if (humanchoice === "paper" ) {
        if (getComputerChoice(random([1, 2, 3])) === "scissors")
            return "computer won"
    }

 }


function game(){
    var h = 0; 
    var cm = 0; 
    for (let i = 0; i < 2; i++) {
        var humanchoice = prompt("Rock, paper or Scissors ? ").toLowerCase();
        console.log(humanchoice);
        console.log(playround(humanchoice));
        console.log(humanchoice === "rock");
        if ((playround(humanchoice)) == "Yon won"){
            h++; 
        }
        else {
            cm++; 
        }
        

     }
    
    if ( h > cm){
        console.log("the Human won in the five games"); 
    }

    else if ( cm > h ){ 
        console.log("The computer won in the five games")
    }

    else {
        console.log("The five games eneded in draw")
    }
}

game()