
function HighestScorer(scores)
{
    let hScorer = scores[0][0];
    let hScore = scores[0][1]; 
    for(let i = 0; i < scores.length; i++)
    {
        if(hScore < scores[i][1])
        {
            hScore = scores[i][1];
            hScorer = scores[i][0];
        }
    }

    return hScorer;
}

let scores = [
    ["Sabbir", 20],
    ["Moni", 30],
    ["Shanto", 112],
    ["Liton", 54]
];

let name = HighestScorer(scores);
console.log(name);