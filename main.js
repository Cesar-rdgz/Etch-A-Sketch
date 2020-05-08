// drawing the canvas with grid css display
let sketch = document.querySelector('.container');
let sketchHeight = sketch.clientHeight;
let sketchWidth = sketch.clientWidth;
let div;





function sketchStart(squares) {
    let totalSquares = squares * squares;
    let squaresWidth = (sketchWidth / squares) + 'px';
    let squaresHeight = (sketchHeight / squares) + 'px';
    sketch.setAttribute('style', `display: grid; grid-template-columns: repeat(${squares}, ${squaresWidth}); grid-template-rows: repeat(${squares}, ${squaresHeight})`);

    for (let i = 0; i < totalSquares; i++) {
        div = document.createElement('div');
        div.classList.add('paint');
        sketch.appendChild(div);
    }
}


// drawing the canvas

// changing the background color
let container = document.querySelector('.container');
container.addEventListener('mousemove', paint);

function paint(e) {
    if (e.target !== e.currentTarget) {
        let squareTouched = e.target;
        squareTouched.style.backgroundColor = 'black'; 
    }
}

function reset () {
    let resetPoints = document.querySelectorAll('.paint');

    resetPoints.forEach(clear => clear.style.backgroundColor = 'white');
}

// changing the background color

// changing the canvas (sketch)

let canvasSize = document.querySelector('#sps');
canvasSize.addEventListener('change', changeSize);

function changeSize(e) {
    let squares;
    if (e.target.value == '16') {
        squares = 16;
        sketchStart(squares);
        reset();
    }else if (e.target.value == '64') {
        squares = 64;
        sketchStart(squares);
        reset();
    }else if (e.target.value == '50') {
        squares = 50;
        sketchStart(squares);
        reset();
    }else if (e.target.value == '30') {
        squares = 30;
        sketchStart(squares);
        reset();
    }
}


// changing the canvas (sketch)


//Crazy color

let crazyColorBtn = document.querySelector('#crazy-color');

crazyColorBtn.addEventListener('click', crazy);

function crazy() {
    reset();
    let container = document.querySelector('.container');
    container.addEventListener('mousemove', paint);

    function paint(e){
        const colors = ['yellow', 'pink', 'blue', 'orange', 'red', 'green', 'brown'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        if (e.target !== e.currentTarget) {
            let squareTouched = e.target;
            squareTouched.style.backgroundColor = `${randomColor}`; 
        }
    }
}

 //Crazy color


 // Return to black

const blackBtn = document.querySelector('#black');

blackBtn.addEventListener('click', returnToBlack);

function returnToBlack() {
    reset();
    let container = document.querySelector('.container');
    container.addEventListener('mousemove', rTB);

    function rTB(e) {
        if (e.target !== e.currentTarget) {
            let squareTouched = e.target;
            squareTouched.style.backgroundColor = 'black'; 
        }
    }
}

 // Return to black





/*
This block of code was changed by te function paint(), this is just a note for me, I justo rewrite the code for a better version
let paintPoints = document.querySelectorAll('.paint');

paintPoints.forEach(paint => paint.addEventListener('mousemove', () => {paint.classList.add('paint-move')}));


let reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    location.reload();
});*/
