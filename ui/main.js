
var button = document.getElementById('counter');



button.onclick = function (){

var request = new XMLHttpRequest ();

request.onreadystatechange = function(){
    if (request.readystate === XMLHttpRequest.DONE){
        // Take some action
        if (request.status === 200){
            var counter = request.responseText;        
            var span  = document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
    }

    
};
request.open('GET', 'http://ashishpatidar01.imad.hasura-app.io/counter',true);
request.send('null');
};


//sumit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submmit-btn');
submit.onclick = function(){
  // should make a request to a server
  //capture list of name and render the names as list
  var names = ['name1','name2','name3'];
  var list = '';
  for (var i=0; i<names.length; i++){
      list+='<li>'+names[i]+'</li>';
  }
  var ul = document.getElementById('nameList');
  ul.innerHTML = list;
};