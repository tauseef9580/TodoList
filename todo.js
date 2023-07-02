
const myArray = [{
    name:'tauseef',
    dueDate: '01--7-2002'
},
{
    name: 'Go to gym',
    dueDate: '01-01-2002'
}]; // store the input item list in the array

renderTodoList();

// function to display on web page
function renderTodoList(){
        let listItem = '';
        for(let i=0; i<myArray.length;
    i++){
        const itemObject = myArray[i];
        const {name,dueDate} = itemObject;
        const html = `
            <div>
                ${name}
            </div>
                
            <div>
                ${dueDate}
            </div>

            <button
            class="delete-todo-button" onclick="
            myArray.splice(${i},1);
            renderTodoList();
            
            ">
                Delete
            </button> 
        `;
        listItem += html;
    }

    document.querySelector('.js-todo-list').innerHTML = listItem;
    }
function additems(){
    const item = document.querySelector('.input1');
    const dateInput = document.querySelector('.js-due-date');
    myArray.push({
        name : item.value,
        dueDate : dateInput.value
    });
    

    item.value = ''; // making null so input can impty before entering new item int list
    renderTodoList();
}





    