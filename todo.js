
const myArray = JSON.parse(localStorage.getItem('myArray')) || []; // store the input item list in the array

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

            // save the updates
            saveToStrorage();
            
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

    // save to updates
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('myArray',JSON.stringify(myArray));
}





    
