
function myfunc(){
    const randomNo1 = Math.floor(Math.random() * 6) +1

const random1 = `images/dice${randomNo1}.png`

document.getElementsByClassName('img1')[0].setAttribute("src", random1)


const randomNo2 = Math.floor(Math.random() * 6) +1

const random2 = `images/dice${randomNo2}.png`

document.getElementsByClassName('img2')[0].setAttribute("src", random2)

const element = document.querySelector("h1")


if(randomNo1> randomNo2){
     element.innerHTML = "🎉Player 1 Wins" 
}

 else if(randomNo2> randomNo1){
    element.innerHTML = "🎉Player 2 Wins" 
}

else{
    element.innerHTML = "Draw"
}


} 



document.querySelector("button").addEventListener( "click", myfunc)

