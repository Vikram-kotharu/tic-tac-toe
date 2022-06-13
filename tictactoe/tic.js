let player = 'x';
let gameOver = false;
let indi = '';

const changeplayer = () =>{
    return player === "x" ? "0" : "x";
};

const winnercheck = ()=>{
    let r = document.querySelectorAll('.boxText');
    let pos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    pos.forEach((item)=>{
        if(
        r[item[0]].innerText === r[item[1]].innerText && r[item[1]].innerText === r[item[2]].innerText && r[item[0]].innerText !== ""){
            document.getElementById('result').innerText = `Winner is ${r[item[0]].innerText}`
            gameOver = true;
            indi = 'okay';
        }

    })
    if(indi === ''){
        document.getElementById('result').innerText = 'Draw!';
    }
}

let boxes = document.getElementsByClassName('or');

console.log(boxes);

Array.from(boxes).forEach((box) =>{
    let boxText = box.querySelector('.boxText');
    console.log(boxText)
    box.addEventListener('click',()=>{
        if(boxText.innerText===""&& !gameOver){
            boxText.innerText = player;
            player = changeplayer();
            winnercheck();
        }
    });
});

let reset = document.getElementById('reset');
console.log(reset);

reset.addEventListener('click',()=>{
    let texts = document.getElementsByClassName('boxText');
    Array.from(texts).forEach((boxText)=>(boxText.innerText=""));
    gameOver = false;
    document.getElementById('result').innerText = '';


})