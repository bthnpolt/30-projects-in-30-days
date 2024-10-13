const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const edtBtn = document.querySelector('.edit-btn');
const addBtn = document.querySelector('.add-btn');

let todoListArr = [];

class Read{
    static read(){
        todoListArr = Localstroge.getItem();
        let result="";
        for (let i = 0; i < todoListArr.length; i++) {
            result += ` 
            <li class = "${todoListArr[i].completed ? "completed" : ""}">
                <span>${todoListArr[i].id+1}.${todoListArr[i].text}</span>
                <button onclick = "Completed.completed(${i})"> <i class = "fas fa-check"></i></button>
                <button onclick = "Edit.edit(${i})"> <i class = "fas fa-pen-to-square"></i></button>
                <button onclick = "Delete.delete(${i})"><i class = "fas fa-trash"></i></button>
            </li>`
        }
        todoList.innerHTML = result;

    }
}

class Addtodo{
    static addTodo(){
        const todoText =  todoInput.value.trim();
        todoListArr = [...todoListArr,{id:todoListArr.length, text:todoText, completed:false}];
        todoInput.value = "";
        Localstroge.setItem();
        Read.read();
    }
}



class Completed{
    static completed(id){
        todoListArr[id].completed = true;
        Localstroge.setItem();
        Read.read();
    }
}

class Edit{
    static edit(id){
        todoInput.value = "";
        todoInput.value = todoListArr[id].text;
        alert("Düzenleme Modu Aktif!");
        edtBtn.style.display = 'flex';
        addBtn.disabled = true;
        edtBtn.addEventListener("click", ()=>{
            todoListArr[id].text = todoInput.value.trim();
            todoInput.value = "";
            addBtn.disabled = false;
            edtBtn.style.display = 'none';
            Localstroge.setItem();
            Read.read(); 
        });
    }
}

class Delete{
    static delete(id){
        todoListArr.splice(id,1);
        Localstroge.setItem();
        Read.read();
    }
}

class Localstroge{
    static getItem(){
       const items  = JSON.parse(localStorage.getItem('todos'));
       return items ? JSON.parse(localStorage.getItem('todos')) : [];
    }

    static setItem(){
        localStorage.setItem('todos',JSON.stringify(todoListArr));
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    Read.read();
});