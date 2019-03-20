var addBtn= document.getElementById('btn');
addBtn.addEventListener('click',addFunction);

function addFunction(){  
    var text= document.getElementById('txt').value;
    var toDoItem = document.createTextNode(text);
    var newElem = document.createElement('li');
    newElem.appendChild(toDoItem);
    if(text === null || text.match(/^ *$/) !== null){
        document.getElementById('txt').style.border="2px solid red";
    }
    else{
        document.getElementById('txt').value="";
        document.getElementById('txt').style.border="1px solid black";
        var todoItemList= document.getElementById('todoitemlist');
        todoItemList.appendChild(newElem); 
    }
}

