import { Todolist }  from './jQueryTodolist';

$(function(){
    const todolist = new Todolist();
    todolist.renderTodos();
});