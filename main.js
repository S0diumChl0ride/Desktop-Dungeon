// initializes the main canvas of the game
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d'); //Creates a super paintbrush to draw stuff in 2d. Places it in a variable called CTX
canvas.width = 720; 
canvas.height = 840;

titleText();


function titleText(){
    let text = document.querySelector('canvas').getContext('2d');
    text.font = '60px serif';
    text.strokeStyle = 'white';
    text.textAlign = "center";
    text.strokeText("Iron's Embrace", canvas.width / 2, 150);

    text.font = '40px serif';
    text.strokeStyle = 'white';
    text.textAlign = "center";
    text.strokeText("Descend into her Embrace...", canvas.width / 2, 720);

    console.log("It's working!");
};

canvas.addEventListener('click', function startGame() {
    ctx.clearRect(0, 0, canvas.width, canvas. height);
});








// Creates random squares based on the loop parameters. Also only displays on canvas
/*for(let i = 0; i < 6; i++){
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
    ctx.fillRect(x, y, 50, 50);
};*/








