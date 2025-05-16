var randomnummber1=Math.floor(Math.random()*6)+1;
var randomimage="dice"+randomnummber1+".png";
var randomsrc="images/" +randomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsrc)


var randomnummber2=Math.floor(Math.random()*6)+1;
var randomimage="dice"+randomnummber2+".png";
var randomsrc="images/" +randomimage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsrc)


if(randomnummber1>randomnummber2){
    document.querySelector("h1").innerHTML="play 1 Wins!";

}else if(randomnummber2>randomnummber1){
    document.querySelector("h1").innerHTML="play 2 wins!";

}else{
    document.querySelector("h1").innerHTML="draw!"
}