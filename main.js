function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

}

function draw(){
    rect(30,20,55,55,20)
    describe('white rect with black outline in top-right of canvas');
    rect(30,20,55,55,20)
    describe('white rect with black outline in top-left of canvas');
    rect(30,20,55,55,20)
    describe('white rect with black outline in bottom-right of canvas');
    rect(30,20,55,55,20)
    describe('white rect with black outline in bottom-left of canvas');
}