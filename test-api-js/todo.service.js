class todoservice{
    todo_data = {
        "todo":[{
            "id":1,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":2,
            "title": "T3",
            "description": "D1",
            "done": false
        },{
            "id":3,
            "title": "T4",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
    todo={
            "id":4,
            "title": "T5",
            "description": "D1",
            "done": false
        }
        this.todos.todo.push(todo)
        return this.todos
    }
  
    delete_todo(todo){
       todo = this.todos.todo.splice(1)
       console.log(todo)
       return this.todos

    }

    update_todo(id, todo){
        todo = this.todos.todo.map(obj => {
            if(obj.id == 1){
                return{...obj, "title":"T2"};
            }
            return obj;
        })
        console.log(todo)
        return todo[0]
    }
    
}


module.exports= todoservice;