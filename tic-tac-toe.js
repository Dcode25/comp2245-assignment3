var player=1;
var board;
var winner;
var button;

window.onload= function(){
    board=document.querySelectorAll('#board div');
    winner= document.getElementById("status");
    button= document.getElementsByClassName("btn")[0];


    for (i=0; i<board.length; i++){
        board[i].classList.add("square");
        board[i].addEventListener("click", startGame);
        board[i].addEventListener("mouseover", highlight);
        board[i].addEventListener("mouseout", nohighlight);
    }



}


function startGame(i){

    if ((i.target.innerHTML != "X")&&(i.target.innerHTML != "O")){
        if (player == 1){
            i.target.innerHTML = "X";
            i.target.className += (" X ");
            player = 2;
        }
        else{
            i.target.innerHTML = "O";
            i.target.className += (" O ");
            player = 1;
        }
    }
    checkWin();


}

function highlight(i){
    i.target.classList.add("hover");
    
}

function nohighlight(i){
    i.target.classList.remove("hover");
}


function checkWin(){

    var win1= board[0]&&board[1]&&board[2]
    var win2= board[3]&&board[4]&&board[5]
    var win3= board[6]&&board[7]&&board[8]
    var win4= board[0]&&board[3]&&board[6]
    var win5= board[1]&&board[4]&&board[6]
    var win6= board[2]&&board[5]&&board[8]
    var win7= board[0]&&board[4]&&board[8]
    var win8= board[2]&&board[6]&&board[2]
    
    

if((win1.innerHTML=="X")||(win2.innerHTML=="X")
||(win3.innerHTML=="X")||(win4.innerHTML=="X")||
(win5.innerHTML=="X")||(win6.innerHTML=="X")||
(win7.innerHTML=="X")||(win8.innerHTML=="X")
){

    winner.classList.add("you-won");
    winner.innerHTML = "Congratulations! X is the Winner!";

}else if


((win1.innerHTML=="O")||(win2.innerHTML=="O")
||(win3.innerHTML=="O")||(win4.innerHTML=="O")||
(win5.innerHTML=="O")||(win6.innerHTML=="O")||
(win7.innerHTML=="O")||(win8.innerHTML=="X"))
{

    winner.classList.add("you-won");
    winner.innerHTML = "Congratulations! O is the Winner!";

}


button.addEventListener("click",newGame);
function newGame(){
    
    for(var i = 0; i<board.length; i++){
        board[i].innerHTML = "";
        board[i].classList.remove("X");
        board[i].classList.remove("O");
    }
    winner.innerHTML = "Move your mouse over a square and click to play an X or an O.";
     winner.classList.remove("you-won");

     

    
}

}