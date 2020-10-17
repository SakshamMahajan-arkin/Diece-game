alert("After pressing ok you'll see our winner!!");
var random=7*(Math.random());
random=Math.ceil(random);
random=random%7;
if (random===0){
  random=1;
}
document.querySelector('.img1').src="images/dice"+random+".png";
var random2=7*(Math.random());
random2=Math.ceil(random2);
random2=random2%7;
if (random2===0){
  random2=1;
}
document.querySelector('.img2').src="images/dice"+random2+".png";
if (random==random2){
  document.querySelector('h1').innerHTML="Draw!";
}
else if (random>random2) {
  document.querySelector('h1').innerHTML="Player 1 wins";
}
else{
  document.querySelector('h1').innerHTML="Player 2 wins";
}
