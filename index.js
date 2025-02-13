let questions = [
    {text: "let's hang out, it'll be fun", image: "images/smash.jpg"},
    {text: "we'll take lots of pics together", image: "images/valli2.jpg"},
    {text: "we can play brawl and lose all our trophies", image: "images/brawl.jpg"},
    {text: "we can watch Single's Inferno and simp for Jiyeon together", image: "images/singles.jpg"},
    {text: "we can bing gose", image: "images/17!.jpg"},
    {text: "Just say yes, it'll be my treat", image: "images/food.jpg"}
];

let currentQuestion = 0;

function dodgeButton() {
    let noButton = document.getElementById("noButton");
    let buttonWidth = noButton.offsetWidth;
    let buttonHeight = noButton.offsetHeight;
    
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    
    let maxX = viewportWidth - buttonWidth;
    let maxY = viewportHeight - buttonHeight;
    
    let randomX = Math.min(Math.max(0, Math.floor(Math.random() * maxX)), maxX);
    let randomY = Math.min(Math.max(0, Math.floor(Math.random() * maxY)), maxY);
    
    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}

function playSongSection() {
    const song = document.getElementById('romanticSong');
    song.currentTime = 42; 
    song.play();
    
    
    setTimeout(() => {
        song.pause();
        song.currentTime = 42; 
    }, 23000); 
}

function nextQuestion(response) {
    if (response) {
        document.getElementById("questionBox").style.display = 'none';
        let loveScene = document.getElementById('loveScene');
        loveScene.style.display = 'block';

        setTimeout(() => {
            loveScene.style.opacity = '1';
            loveScene.style.transform = 'translate(-50%, -50%) scale(1)';
            document.querySelector('.text-overlay').style.opacity = '1';
            playSongSection(); 
        }, 500);
    } else {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            document.getElementById("question").innerText = questions[currentQuestion].text;
            document.getElementById("questionImage").src = questions[currentQuestion].image;
            
            if (currentQuestion === questions.length - 1) {
                dodgeButton();
            }
        } else {
            nextQuestion(true);
        }
    }
}

document.getElementById("noButton").addEventListener("mouseover", function() {
    if (currentQuestion === questions.length - 1) {
        dodgeButton();
    }
});

