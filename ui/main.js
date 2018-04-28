var bu = document.getElementById('counter');
var counter = 0;

bu.onclick = myFuntion (); 

function myFunction()
{
    counter = counter + 1;
var span = document.getElementById('count');
span.innerHTML = counter.toString();    
}