const input = document.querySelector(".input");
const Button = document.querySelector(".btn");
const List = document.querySelector(".list");

Button.addEventListener('click', addtodo);
List.addEventListener('click', deletetick);

function addtodo(event){
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newtodo = document.createElement('li');
    newtodo.innerText = input.value;
    newtodo.classList.add('item'); 
    todoDiv.appendChild(newtodo);

    //btns
    const completebutton = document.createElement('button');
    completebutton.innerHTML= '<i class="fas fa-check"></i>'
    completebutton.classList.add("completebtn");
    todoDiv.appendChild(completebutton);

    const trashbutton = document.createElement('button');
    trashbutton.innerHTML= '<i class="fas fa-trash"></i>'
    trashbutton.classList.add("trashbtn") ;
    todoDiv.appendChild(trashbutton);

    List.appendChild(todoDiv);

    input.value= "";
}

function deletetick(e) {
    const item= e.target;
     if(item.classList[0]=== 'trashbtn'){
        const todo = item.parentElement;
        todo.remove();
     }
     if(item.classList[0]=== 'completebtn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
     }
}

