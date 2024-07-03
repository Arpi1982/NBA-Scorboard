let scoreHome = 0
let scoreGuest = 0
const signHome = document.getElementById('sign-home')
const signGuest = document.getElementById('sign-guest')
const newGame = document.getElementById('new-game')





function scoreOne(){
signHome.innerHTML = scoreHome+=1
}

function scoreTwo(){
signHome.innerHTML = scoreHome+=2
}

function scoreThree(){
signHome.innerHTML = scoreHome+=3
}

function scoreGuestOne(){
signGuest.innerHTML = scoreGuest+=1
}

function scoreGuestTwo(){
signGuest.innerHTML = scoreGuest+=2
}

function scoreGuestThree(){
signGuest.innerHTML = scoreGuest+=3
}

function newgame(){
  scoreHome = 0 
  signHome.innerHTML = scoreHome
  scoreGuest = 0
  signGuest.innerHTML = scoreGuest
}