let fields = [
    "none", "none", "none",
    "none", "none", "none",
    "none", "none", "none"
];

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

    

    if(fields[id] == "none") {
        setField(id, shape);
        gameIsOver++;
        toggleShape();
    }
    else {
        if(gameIsOver < fields.length)
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
    if(gameIsOver == fields.length) {
        document.getElementById('end-screen').classList.remove('d-none');
        document.getElementById('end-screen').classList.add('endScreen');
    }
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
}