/* console global*/
/*elements*/    
const status = document.querySelector(`.status`);
const reset = document.querySelector(`.reset-btn`);
const cells =  document.querySelectorAll(`.game-cell`);
const winnerAlert = document.getElementById(`winner-alert`);
    var winner = "null";
    var x=true; 
    var live=true;

    /* events */

function solve(){
   if(live === false){
       return;
   }else if(x){
        if(this.classList[2] !== "x" && this.classList[2] !== "o" ){
            document.getElementById("status").innerHTML =" o is next";
            x=!x;
      this.classList.add("x");
        }
    }else{
        if(this.classList[2] !== "x" && this.classList[2] !== "o"){
            document.getElementById("status").innerHTML =" x is next";
            x=!x;
      this.classList.add("o");  
        }
    }
    
    winTest();
}

function res(){
    x=true;
    document.getElementById("status").innerHTML ="x is next";
    document.getElementById("tied").innerHTML ="congratulations";
     document.getElementById("tied").style.color = "limegreen";
    winnerAlert.classList.remove("active");
    for(const cell of cells){
        if(cell.classList[2] === "x"){
    cell.classList.remove('x');
            continue;
    }else if(cell.classList[2] === "o"){
     cell.classList.remove('o');
        continue;
    }else{console.log("reset");
            
         }
    }
    live = true;
}
cells.forEach(cell => cell.addEventListener('click', solve));
reset.addEventListener('click', res);


function winTest(){
const topLeft = cells[0].classList[2];
const topMiddle = cells[1].classList[2];
const topRight = cells[2].classList[2];
const middleLeft = cells[3].classList[2];
const middleMiddle = cells[4].classList[2];
const middleRight = cells[5].classList[2];
const bottomLeft = cells[6].classList[2];
const bottomMiddle = cells[7].classList[2];
const bottomRight = cells[8].classList[2];
    
    console.log(topLeft,topMiddle,topRight);
    if(topLeft && topLeft === topMiddle && topLeft === topRight){
        live=false;
        winner=topLeft;
        document.getElementById("status").innerHTML =  winner + " is the winner";
        document.getElementById("winner").innerHTML = winner + " won!";
        winnerAlert.classList.add("active");
       }else if(topLeft && topLeft === middleLeft && topLeft === bottomLeft){
                live=false;
                winner=topLeft;
                document.getElementById("status").innerHTML =  winner + " is the winner";
           document.getElementById("winner").innerHTML = winner + " won!";
           winnerAlert.classList.add("active");
        }else if(topLeft && topLeft === middleMiddle && topLeft === bottomRight){
                live=false;
                winner=topLeft;
            document.getElementById("status").innerHTML =  winner + " is the winner";
            document.getElementById("winner").innerHTML = winner + " won!";
            winnerAlert.classList.add("active");
        }else if(middleLeft && middleLeft === middleMiddle && middleLeft === middleRight){
                live=false;
                winner=middleLeft;
            document.getElementById("status").innerHTML =  winner + " is the winner";
            document.getElementById("winner").innerHTML = winner + " won!";
            winnerAlert.classList.add("active");
        }else if(bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
                live=false;
            winner=bottomLeft;
            document.getElementById("status").innerHTML =  winner + " is the winner";
            document.getElementById("winner").innerHTML = winner + " won!";
            winnerAlert.classList.add("active");
        }else if(topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle){
                live=false;
            winner=topMiddle;
            document.getElementById("status").innerHTML =  winner + " is the winner";
            document.getElementById("winner").innerHTML = winner + " won!";
            winnerAlert.classList.add("active");
        }else if(topRight && topRight === middleMiddle && topRight === bottomLeft){
                live=false;
                winner=topRight;
            document.getElementById("status").innerHTML =  winner + " is the winner";
            document.getElementById("winner").innerHTML = winner + " won!";
            winnerAlert.classList.add("active");
        }else if(topRight && topRight === middleRight && topRight === bottomRight){
                live=false;
           winner=topRight;
            document.getElementById("status").innerHTML =  winner + " is the winner";
            document.getElementById("winner").innerHTML = winner + " won!";
            winnerAlert.classList.add("active");
        }else if( topLeft &&
 topMiddle && topRight && middleLeft &&middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight){
                 document.getElementById("status").innerHTML = "game is tied!";
            document.getElementById("tied").innerHTML ="Ooops!";
            document.getElementById("tied").style.color = "red";
            document.getElementById("winner").innerHTML ="game is tied!";
            winnerAlert.classList.add("active");
            }
    
    }
