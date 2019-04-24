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

function displayCat(i) {
    Board.innerHTML = '';
    var para = document.createElement("div");
    para.classList.add("cat");
    para.innerHTML = `<h3>Name: <span id="name">${catList[i].name}</span>  Clicks: <span id ="clicks">${catList[i].score}</span > <h3><img class="catPic" id="catPic" src="${catList[i].img}">`;
    Board.appendChild(para);
    var clickCounter = document.getElementById('clicks');
    var pictureOfThisCat = document.getElementById('catPic');

    

    pictureOfThisCat.addEventListener('click', (function(evt) {
        return function () {
            console.log(`You clicked on ${catList[i].name}`);
            catList[i].score += 1;

            for (var s = 0; s < catList.length; s++) {
                siteScore += catList[s].score;
            }

            //siteScore = catList[0].score + catList[1].score;

            scoreDisplay.innerText = siteScore;
            clickCounter.innerText = catList[i].score;
            
        };
    })(i) );
    
}

//for (var i = 0; i < catList.length; i++) {
//    displayCat(i);
//}

displayCat(4);

function resetGame() {
    siteScore = 0;
    for (var i = 0; i < catList.length; i++) {
        catList[i].score = 0;
    };
}

//function respondToClick(evt) {
//    if (evt.target.classList == `catPic`) {
//        console.log(`You clicked on ${catList[0].name}`);
//        catList[0].score += 1;
//    } else if (evt.target.classList == "catPic1") {
//        console.log(`You clicked on ${catList[1].name}`);
//        catList[1].score += 1;
//    } else {
//        console.log("Please click on the cat!")
//    };

//    siteScore = catList[0].score + catList[1].score;
//    scoreDisplay.innerText = siteScore;
//    document.getElementById(`clicks${0}`).innerText = catList[0].score;
//    document.getElementById(`clicks${1}`).innerText = catList[1].score;
//}

resetGame();

//Board.addEventListener('click', respondToClick);