// create global variables
let siteScore = 0;
let scoreDisplay = document.getElementById("score");
let scoreBoard = document.getElementById("scoreBoard");
let Board = document.getElementById("PlayField"); 

let catList = [
    {
        name: "Phillip",
        img: "http://placekitten.com/200/300",
        score: 0
    },
    {
        name: "Kelly",
        img: "http://placekitten.com/g/200/300",
        score: 0
    },
    {
        name: "Charles",
        img: "http://placekitten.com/200/300",
        score: 0
    },
    {
        name: "Fenando",
        img: "http://placekitten.com/g/200/300",
        score: 0
    },
    {
        name: "Jose",
        img: "http://placekitten.com/200/300",
        score: 0
    },
    {
        name: "Bryan",
        img: "http://placekitten.com/g/200/300",
        score: 0
    },
    {
        name: "Wilma",
        img: "http://placekitten.com/200/300",
        score: 0
    },
];

function generateCat(i) {
    var para = document.createElement("div");
    para.classList.add("cat");
    para.innerHTML = `<h3>Name: <span id="name">${catList[i].name}</span>  Clicks: <span id ="clicks${i}">${catList[i].score}</span > <h3><img class="catPic${i}" src="${catList[i].img}">`;
    document.getElementById("PlayField").appendChild(para);
}

for (var i = 0; i < catList.length; i++) {
    generateCat(i);
}


function resetGame() {
    siteScore = 0;
    for (var i = 0; i < catList.length; i++) {
        catList[i].score = 0;
    };
}

function respondToClick(evt) {
    if (evt.target.classList == `catPic0`) {
        console.log(`You clicked on ${catList[0].name}`);
        catList[0].score += 1;
    } else if (evt.target.classList == "catPic1") {
        console.log(`You clicked on ${catList[1].name}`);
        catList[1].score += 1;
    } else {
        console.log("Please click on the cat!")
    };

    siteScore = catList[0].score + catList[1].score;
    scoreDisplay.innerText = siteScore;
    document.getElementById(`clicks${0}`).innerText = catList[0].score;
    document.getElementById(`clicks${1}`).innerText = catList[1].score;
}

resetGame();

Board.addEventListener('click', respondToClick);