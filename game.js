
const canvas = document.getElementById("game")
const game = canvas.getContext('2d')

window.addEventListener('load',startgame)
window.addEventListener('resize',startgame)

function startgame(){

    let canvasSize
    if (window.innerHeight>window.innerWidth){
        canvasSize = window.innerWidth*0.8;}
    else {canvasSize=innerHeight*0.8; }


    canvas.setAttribute("width",canvasSize);
    canvas.setAttribute("height",canvasSize);

    const elementSize = canvasSize / 10;

    console.log({canvasSize,elementSize})

    const map = maps[0]
    const mapRows = maps[0].trim().split('\n');
    const mapRowCols = mapRows.map(row=>row.trim().split(' '));
    console.log (map,mapRows,mapRowCols)

    game.font = elementSize+'px'; 'Verdana'
    game.textalign = 'end'


    for(let row = 1; row<=10;row++){
        for(let col = 1; col <= 10; col++){
            game.fillText(emojis[mapRowCols[row-1][col-1]],elementSize*col, elementSize*row)
        }
    }


}



