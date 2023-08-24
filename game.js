let isPlayerOne= true;
let cells = document.getElementsByClassName("cell");

const showWinner = (player) =>{
   
    document.querySelector('#results').innerHTML = player + " :win";

}


const checkWin = (c1,c2,c3) =>{
    if(
        cells[c1].innerHTML.length &&
        cells[c1].innerHTML == cells[c2].innerHTML &&
        cells[c2].innerHTML == cells[c3].innerHTML
    ){
        showWinner(cells[c1].innerHTML);
    }
}


const userMove = (e)=>{
    let cellValue = e.target.innerHTML;
    if(!cellValue.length){
        e.target.innerHTML = isPlayerOne ? 'x' : 'o';
        isPlayerOne = !isPlayerOne; 

        checkWin(0,1,2);
        checkWin(3,4,5);
        checkWin(6,7,8);
        checkWin(0,3,6);
        checkWin(1,4,7);
        checkWin(2,5,8);
        checkWin(0,4,8);
        checkWin(6,4,2);
    }
}


for(let i=0; i<cells.length; i++){
    cells[i].addEventListener('click',userMove);
}



