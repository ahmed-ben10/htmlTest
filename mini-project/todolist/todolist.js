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
        var verwijder= document.createElement("button");
        var verwijderTxt= document.createTextNode("Verwijder");
        verwijder.onclick= deleteItem;
        verwijder.className="remove";
        verwijder.appendChild(verwijderTxt);
        newElem.appendChild(verwijder);

    }
}
    // algemene event handler om boodschap te verwijderen.
    function deleteItem(e) {
        // Haal het te verwijderen element uit het muisevent e.target.
        var elementToBeDeleted = e.target.parentElement;

        // Verwijder het uit de lijst.
        document.getElementById('todoitemlist').removeChild(elementToBeDeleted);
    }

