 
 let yourChoice;
 let yourScore=0;
 let computerChoice;
 let computerScore=0;

 let choices=["rock","paper","scissor"];

 window.onload=function(){
    for(let imageIndicator=0;imageIndicator<3;imageIndicator++)
    {
        let choice=document.createElement("img");
        choice.id=choices[imageIndicator];
        choice.src=choices[imageIndicator]+".png";
        choice.addEventListener("click",selectChoice)
        document.getElementById("choices").append(choice);
    }
 }
 function selectChoice(){
    //inserting users choice
    yourChoice=this.id;
    document.getElementById("your_Choice").src=yourChoice + ".png";

    //finding random choice by computer
    computerChoice=choices[Math.floor(Math.random()*3)];
    document.getElementById("computer_Choice").src=computerChoice+".png";

    //condition for draw in game
    if(yourChoice==computerChoice)
    {
        yourScore+=0;
        computerScore+=0;
    }

    //conditon for anyone win
    else
    {
        //taking all winning conditions of player 
        if((yourChoice=="rock" && computerChoice=="scissor") || 
            (yourChoice=="paper" && computerChoice=="rock") || 
            (yourChoice=="scissor" && computerChoice=="paper"))
            {
                yourScore+=1;
            } 
        else
            {
            computerScore+=1;
            }
    }
    document.getElementById("your_Score").innerText=yourScore;
    document.getElementById("computer_Score").innerText=computerScore;
    if(yourScore>=5) 
    {
        document.getElementById("result").innerText="Your score reached 5 - you won 🎉";
        // setTimeout(location.reload(),90000);
        document.getElementById("choices").classList.add('choices_1')
    }
    if(computerScore>=5)
    {
        document.getElementById("result").innerText="Computer score reached 5 - computer won 🎉";
        // setTimeout(location.reload(),90000);
        document.getElementById("choices").classList.add('choices_1')
    }
   
 }


 // //checking priority between rock & paper 
        // (yourChoice=="rock" && computerChoice=="paper")?computerScore++:yourScore++;
        // (yourChoice=="paper" && computerChoice=="rock")?yourScore++:computerScore++;

        // //checking priority between paper & scissor
        // (yourChoice=="paper" && computerChoice=="scissor")?computerScore++:yourScore++;
        // (yourChoice=="scissor" && computerChoice=="paper")?yourScore++:computerScore++;
        
        // //checking priority between scissor & rock
        // (yourChoice=="scissor" && computerChoice=="rock")?computerScore++:yourScore++;
        // (yourChoice=="rock" && computerChoice=="scissor")?yourScore++:computerScore++;
 
 