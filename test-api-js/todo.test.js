

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("adding another object in the array will increase the size from 3 to 4 ", () => {
        expect(todo_service.add_todo().todo.length).toEqual(4);
    });

    test("It should display all the values with the added object  ", () => {
        expect(todo_service.add_todo()).toEqual({
            "todo":
             [{
                "description": "D1", 
                "done": false,
                 "id": 1,
                  "title": "T1"
                }, {
                    "description": "D1",
                     "done": false,
                      "id": 2,
                       "title": "T3"
                    }, {
                        "description": "D1",
                         "done": false,
                          "id": 3,
                           "title": "T4"
                    }, {
                        "description": "D1",
                         "done": false, 
                         "id": 4,
                          "title": "T5"
                    }, {
                        "description": "D1",
                         "done": false,
                          "id": 4, 
                          "title": "T5"
                    }]});
    });


    test("It should update the title for id 1 from T1 to T2", ()=>{
        expect(todo_service.update_todo()).toEqual({
            "description": "D1",
          "done": false,
          "id": 1,
          "title":"T2"})
          
    })
    



    test("It should delete the value as per the mentioned id and return the values deleted ", () =>{
        expect(todo_service.delete_todo()).toEqual(
            {"todo":
             [{
                "description": "D1",
                 "done": false, 
                 "id": 1,
                  "title": "T1"
                }]})
    })


});