


let addToDoButton = document.getElementById('addToDo');
let Container = document.getElementById('Container');
let input = document.getElementById('input');




addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    if (input.value ==="") {
      alert("You must write something!");
    }
    else{paragraph.innerText = input.value;}
    
   
    
    Container.appendChild(paragraph);
     input.value = "";
  
    
    paragraph.addEventListener('click', function(){
             paragraph.style.textDecoration = "line-through";
    })
   

    
    paragraph.addEventListener('dblclick', function(){
        Container.removeChild(paragraph);
    })
})