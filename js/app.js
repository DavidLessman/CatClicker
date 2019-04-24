// create global variables
let siteScore = 0;
let scoreDisplay = document.getElementById("score");
let scoreBoard = document.getElementById("scoreBoard");
let Board = document.getElementById("PlayField"); 

let catList = [
    {
        name: "Phillip",
        img: "http://placekitten.com/200/300",
        score: 25
    },
    {
        name: "Kelly",
        img: "http://placekitten.com/g/200/300",
        score: 12
    }];

function generateCat(i) {
    var para = document.createElement("div");
    para.classList.add("cat");
    para.innerHTML = `<h3>Name: <span id="name">${catList[i].name}</span>  Clicks: <span id ="clicks">${catList[i].score}</span > <h3><img src="${catList[i].img}">`;
    document.getElementById("PlayField").appendChild(para);
}

for (var i = 0; i < catList.length; i++) {
    generateCat(i);
}


//generateCat(1);


//function resetGame() {
//    let catsHTML = new Cat;
//    Board.innerHTML = catsHTML.join('');
//}

function respondToClick(evt) {
    siteScore = catList[0].score + catList[1].score;
    scoreDisplay.innerText = siteScore;
}

//resetGame();

Board.addEventListener('click', respondToClick);