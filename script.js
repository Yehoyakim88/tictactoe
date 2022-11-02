let fields = [];

let img_circle = "./img/circle-outline-64.png";
let img_cross = "./img/x-mark-64.png";

let shape = "cross";
let gameIsOver = 0;

function init() {
    document.getElementById('player-image').setAttribute('src', './img/x-mark-64.png');
}

function fillShape(id) {
    
    
    console.log('fillShape()')
    console.log(`id: ${id}\nshape: ${shape}`);

    

    if(!fields[id]) {
        setField(id, shape);
        gameIsOver++;
        toggleShape();
    }
    else {
        if(gameIsOver < 9)
        alert(`Sorry Kumpel, ist aber schon belegt ;)`);
        return
    }

    
}


function toggleShape() {
    console.log('toggleShape()');
    console.log(`shape before toggle: ${shape}`);
    if(shape == "cross") {
        shape = "circle";
        document.getElementById('player-image').setAttribute('src', './img/circle-outline-64.png'); 
        
    }
    else { 
        shape = "cross";
        document.getElementById('player-image').setAttribute('src', './img/x-mark-64.png'); 
}

    console.log(`shape after toggle: ${shape}`);
    // if(gameIsOver == 9) {
    //     document.getElementById('end-screen').classList.remove('d-none');
    //     document.getElementById('end-screen').classList.add('endScreen');
    // }
}

function setField(id) {
    console.log('setField()');

    if(shape == "circle") {
        console.log('shape is circle');
        document.getElementById(`cross-${id}`).classList.add('d-none');
        document.getElementById(`circle-${id}`).classList.remove('d-none');
        fields[id] = "circle";
    }
    else if(shape == "cross") {
        console.log('shape is cross');
        document.getElementById(`circle-${id}`).classList.add('d-none');
        document.getElementById(`cross-${id}`).classList.remove('d-none');
        fields[id] = "cross";
    }

    console.log(fields);

    checkForWin();
}


function checkForWin() {
    let winner;
    let classToAdd;
    let line_transform;

    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        classToAdd = 'horLineFirstRow';
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        classToAdd = 'horLineSecondRow';
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        classToAdd = 'horLineLastRow';
    }
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        classToAdd = 'vertLineFirstCol';
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        classToAdd = 'vertLineSecondCol';
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        classToAdd = 'vertLineLastCol';
    }
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        classToAdd = 'diagonLineTopLeft';
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        classToAdd = 'diagonLineTopRight';
    }

    if(winner) {
        alert(`${winner} hat gewonnen!`);
        document.getElementById('end-screen').classList.remove('d-none');
        document.getElementById('end-screen').classList.add('endScreen');
        drawLineForWin(classToAdd);
    }
}

function drawLineForWin(classToAdd) {
    let content = document.getElementById('id-content');

    document.getElementById('win-line').classList.add(classToAdd)
    document.getElementById('win-line').classList.remove('d-none');
}