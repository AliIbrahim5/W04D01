
import Todoitem from '../todoitem'
import  "./todo.css";
import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props){
super(props)
this.state={
    todos:[{id:1, name:'plaey'},
    {id:2,name:"sleep"},
]
}

}


  
  handleSubmit =(e) =>{
    e.preventDefault()
    const obj= {
        id:this.state.todos.length +1,
        name:e.target.taxt.value

    }
    this.setState({
   todos: [...this.state.todos,obj]
       
    });
    e.target.taxt.value ="";
  };

  handDelet =(id)=>{
    this.setState({ todos:this.state.todos.filter((obj)=>obj.id != id)
    });
  };
  
    render() {
        return (
            <div className="todo">
                <form  onSubmit={this.handleSubmit}>
                    <input type="text"name="taxt" onChange={this.handleChange} />
                        <button> Add task</button>
                </form>
                <ul> 
                   {this.state.todos.map((todo,i)=>(
                     <li>
                     <h3>{todo.name}</h3>
                     <h3 onClick={()=>{this.handDelet(todo.id)}}className="handDelet" >X</h3>
                 </li>
                   ))}  
                </ul>   
            </div>
        );
                   }
                  }
                  
                            
        
  





