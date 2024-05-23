let userScore = 0 ; 
let compscore = 0 ;

const choices = document.querySelectorAll(".choice") ;
const msg = document.querySelector("#msg") ;
const userscorePara = document.querySelector("#user-score") ;
const compscorePara = document.querySelector("#comp-score") ;
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"] ;
    const randomIdx = Math.floor(Math.random() *3) ;
    return options[randomIdx] ;
}
const drawGame = () => {
    msg.innerText = " Game Draw , Play again !"
    msg.style.backgroundColor = "rgb(0, 24, 39)"
}
const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++ ;
        userscorePara.innerText = userScore ;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green"
    }else{
        compscore++ ;
        compscorePara.innerText  = compscore ;
        console.log("You loose") ;
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}` ;
        msg.style.backgroundColor = "red"
    }
}
const playGame = (userChoice) => {
    console.log("user choice was =",userChoice) ;
    const compChoice = genCompChoice() ;
    console.log("computer choice was =",compChoice) ;
    if(userChoice === compChoice){
        drawGame() ;
    }
    else{
        let userWin = true ; 
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ; 
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }
        else{
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin,userChoice, compChoice) ;
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice) ;
    })
})