/* console global*/
/*elements*/    
const status = document.querySelector(`.status`);
const reset = document.querySelector(`.reset-btn`);
const cells =  document.querySelectorAll(`.game-cell`);
    var winner=null;
    var x=true; 
    var live=true;

    /* events */

function solve(){
   if(live === false){
       return;
   }else if(x){
        if(this.classList[2] !== "x" && this.classList[2] !== "o" ){
            x=!x;
      this.classList.add("x");
        }
    }else{
        if(this.classList[2] !== "x" && this.classList[2] !== "o"){
            x=!x;
      this.classList.add("o");  
        }
    }
    
    winTest();
}

function res(){
    x=true;
    winner=null;
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
reset.addEventListener('click', res);
cells.forEach(cell => cell.addEventListener('click', solve));


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
       }else if(topLeft && topLeft === middleLeft && topLeft === bottomLeft){
                live=false;
                
        }else if(topLeft && topLeft === middleMiddle && topLeft === bottomRight){
                live=false;
        }else if(topLeft && topLeft === middleMiddle && topLeft === bottomRight){
                live=false;
        }else if(middleLeft && middleLeft === middleMiddle && middleLeft === middleRight){
                live=false;
        }else if(bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
                live=false;
        }else if(topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle){
                live=false;
        }else if(topRight && topRight === middleMiddle && topRight === bottomLeft){
                live=false;
        }else if(topRight && topRight === middleRight && topRight === bottomRight){
                live=false;
        }
    
    }
