const player1 = "Jack";
const player2 = "Monster";
var playTime = player1;
var gameOver = false;
var images = new Array();

var sequence = [];
var actualRound = 0;
var seqPos = 0;

preloadImages("imagens/x.jpg","imagens/o.jpg")			
loadPainel();
inicializarEspacos();

function preloadImages(){
	for (i = 0; i < preloadImages.arguments.length; i++) {
		images[i] = new Image()
		images[i].src = preloadImages.arguments[i]
	}
}


function loadPainel(){

	if (gameOver) { return;}	

	if (playTime == player1) {

		let player = document.querySelectorAll("div#painel img")[0];
		player.setAttribute("src", images[0].src);
	} else{

		let player = document.querySelectorAll("div#painel img")[0];
		player.setAttribute("src", images[1].src);
	}
}

function inicializarEspacos(){

	let spaces = document.getElementsByClassName("spaces");
	for (var i = 0; i < spaces.length; i++) {

		spaces[i].innerHTML = "<img id='p1' src='"+images[0].src+"' border='0' ><img id='p2' src='"+images[1].src+"' border='0'>";
		spaces[i].getElementsByTagName('img')[0].style.display = "none";
		spaces[i].getElementsByTagName('img')[1].style.display = "none";
		spaces[i].getElementsByTagName('img')[0].style.justifyContent = "center";
		spaces[i].getElementsByTagName('img')[1].style.justifyContent = "center";
		spaces[i].getElementsByTagName('img')[0].style.alignItems = "center";
		spaces[i].getElementsByTagName('img')[1].style.alignItems = "center";

		spaces[i].addEventListener("click", function(){

			if (gameOver) {return;}



			if(this.getAttribute("clicks") == ""){

				if (playTime == player1) {
					this.getElementsByTagName('img')[0].style.display = "inline";
					//this.innerHTML = "<img src='"+images[0].src+"' border='0'>";
					this.setAttribute("clicks", player1);
					playTime = player2;

				}else{
					this.getElementsByTagName('img')[1].style.display = "inline";
					//this.innerHTML = "<img src='"+images[1].src+"' border='0'>";
					this.setAttribute("clicks", player2);
					playTime = player1;
				}
				loadPainel();
				checkWinner();

			}

		});
	}
}

async function checkWinner(){


let a1 = document.getElementById("a1").getAttribute("clicks");
let a2 = document.getElementById("a2").getAttribute("clicks");
let a3 = document.getElementById("a3").getAttribute("clicks");

let b1 = document.getElementById("b1").getAttribute("clicks");
let b2 = document.getElementById("b2").getAttribute("clicks");
let b3 = document.getElementById("b3").getAttribute("clicks");

let c1 = document.getElementById("c1").getAttribute("clicks");
let c2 = document.getElementById("c2").getAttribute("clicks");
let c3 = document.getElementById("c3").getAttribute("clicks");


let winner = "";

if(((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3 ) || (a1==b2 && a1 == c3 )) && a1 != ""  ){
	winner = a1;
}else if((b2 == b1 && b2 == b3 && b2 !="" ) || (b2==a2 && b2==c2 && b2 !="") || (b2==a3 && b2==c1 && b2!=""))
{
	winner = b2;

}else if(((c3==c2 && c3==c1)||(c3==a3 && c3 == b3)) && c3 != "")
{
	winner = c3;
}

if (winner != "") {
	gameOver = true;
	swal("Winner: '" + winner + "'");
		 await sleep(50);
}

}
function sleep(ms)
{
return new Promise(resolve => setTimeout(resolve, ms));

}

const btnReset = document.querySelector('.btn-newgame');

	btnReset.addEventListener('click', function myFunction() {
		location.reload();
	})




	
























