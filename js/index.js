let music = new Audio("../music/music.mp3")
let ting = new Audio("../music/ting.mp3")
let gameover = new Audio("../music/gameover.mp3")
let turn = "X"
let isDraw = false
let isGameOver = false
let reset = document.getElementById('reset')
let imgbox = document.querySelector('.imgbox')

let allBoxTexts = document.getElementsByClassName('box_text')
console.log(allBoxTexts)

music.play();

// func to change the turn
const changeTurn = () => turn === "X" ? "O" : "X"

// func to check for a win
const checkWin = () =>{
    let boxText = document.getElementsByClassName('box_text')
    const win = [
        // for row win 
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // for column win 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // for diagonal win 
        [6, 4, 2],
        [0, 4, 8],
    ]

    win.forEach(e=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && boxText[e[1]].innerText === boxText[e[2]].innerText && boxText[e[0]].innerText !== '' )
        {

            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won The Game hue hue hue"
            isGameOver = true
            turn = ''
            gameover.play();

            // adding css after any player wins 


            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"

            document.querySelector('.game_info').style.justifyContent = "space-around"
            
            document.querySelector('.game_info').getElementsByTagName('div')[0].getElementsByTagName('span')[0].style.fontWeight = 600;
        }

       
    })

}
const checkDraw = () =>{
    const draw = [0, 1, 2, 3, 4, 5, 6, 7, 8,]
    let count = 0
    let allBoxTexts = Array.from(document.getElementsByClassName('box_text'))
    
    draw.forEach(e =>{
        if(allBoxTexts[e].innerText !== ''){
            count++
            // console.log(e)
        }
        if(count === 9){
            document.querySelector('.info').innerText = " Game Draw hue hue hue"
            imgbox.getElementsByTagName("img")[0].setAttribute("src","./img/giphy.gif") 

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            isDraw = true
            isGameOver = true
        }
    })

}
// game logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.box_text')
    element.addEventListener('click',() =>{

        if(boxText.innerText === ''){
            boxText.innerText = turn
            turn = changeTurn();
            console.log(turn)
            ting.play();
 
            checkWin();
             if(!isGameOver){

                checkDraw();
            }
            if(!isGameOver){
                
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
           
        }
    })


});

reset.addEventListener('click',e => location.reload())