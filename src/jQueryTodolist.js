
//class
export class Todolist {
    constructor() {
        this.$todoList = $('.todoList');
        this.$todoSubmit = $('.todoSubmit');
        this.$todoInput = $('input[name="todoInput"]');
        this.$appStorage = JSON.parse(localStorage.getItem('todos')) || []; //array storage for data objects
        this.$submit = $('.submit').on('click', this.addTodo.bind(this));
        this.$inputVal = this.$todoInput.on('click', () => { this.$todoInput.val("") } );
    }

    //prototypeFunctions
    //appStorage에 집어넣고
    // 반영 시킨 appStorage를 전체 그려주고
    // localStorage 압데
    addTodo(event) {
        event.preventDefault();
        if (this.$todoInput.val() !== "") {
            const newObject = { text: this.$todoInput.val(), completed: false };
            this.$appStorage.push(newObject);
            this.renderTodos();
            this.localStorageUpdate();
            this.$todoInput.val("");
        }     
    }

    //localStorage에다가 반영해주기
    localStorageUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.$appStorage));//
    }

    renderTodos() {
        //일단 다 지워주고
        document.querySelector('.todoList').innerHTML = "";
        // $('li').remove();
        this.$appStorage.forEach((todo, idx) => {
            // make new list 
            const $newList = $('<li>');
            $newList.text(todo.text);
            $newList.attr('data-index', idx);
     
            //add delete button to newList
            //addEventListener  
            const button = $('<button class="delete">delete</button>');
            button.on('click', this.deleteItem.bind(this));
            
            //add checkbox to newList
            //add eventListener
    

         
            const $checkbox = $('<input type="checkbox" class="checkbox">');
  
            $checkbox.on('click', this.checkEvent.bind(this));
            
            if (todo.completed) {
                $newList.css("textDecoration", "line-through");
                $('.checkbox').checked = !$('.checkbox').checked 
      
            }
            // if (!$(this).is(':checked')) {
            //     $('.checkbox').attr('checked');
            // }
            ///
            button.appendTo($newList);
            $checkbox.appendTo($newList);
            $newList.appendTo(this.$todoList);
        })
    }
    //target된 list 지우기
    //render 해주고
    // 로컬 스토리지 압데해주고
    deleteItem(event) {
        const $target = event.target;
        const index = $target.parentNode.dataset.index;
        this.$appStorage.splice(index, index + 1);

        this.renderTodos();
        this.localStorageUpdate();
    }

    checkEvent(event) {

        const $target = event.target;
        const index = $target.parentNode.dataset.index;
        this.$appStorage[index].completed = !this.$appStorage[index].completed;

        this.renderTodos();
        this.localStorageUpdate();
        console.log(this.$appStorage[index].completed);
        
    }
}

