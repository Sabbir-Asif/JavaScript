let maxN = parseInt(prompt("Enter maximum time : "));
for(let i = 0; i < maxN; i++)
{
    let user = prompt("Let's start : ");
    let rand = Math.floor(Math.random()*3) + 1;
    let AI, winner, win = 0, lose = 0, draw = 0;
    if(rand == 1)
    {
        AI = "rock";
    }
    else if(rand == 2)
    {
        AI = "paper";
    }
    else
    {
        AI = "seisor";
    }

    if(AI == user)
    {
        console.log("Match drawn.");
        winner = "none";
        draw++;
    }
    else if(AI == rock)
    {
        if(user == "paper") winner = "user";
        else winner = "AI";
    }
    else if(AI == "paper")
    {
        if(user == "seisor") winner = "user"
        else winner = "AI";
    }
    else if(AI == "seisor")
    {
        if(user == "rock") winner = "user";
        else winner = "AI";
    }

    if(winner != "none")
    {
        if(winner == "user")
        {
            console.log("user = " + user);
            console.log("computer = " + AI);
            console.log("You have won the match!");
            win++;
        }
        else
        {
            console.log("user = " + user);
            console.log("computer = " + AI);
            console.log("You have lost :(");
            lose++;
        }
    }
}

console.log("Total matches : " + maxN);
console.log("Win = " + win);
console.log("Lose = " + lose);
console.log("draw = " + draw);