

import React, { Component } from 'react'

export default class Todoitem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <li>
                    <h3>{this.props.todo.name}</h3>
                    <h3 onClick={()=> this.props.handDelet(this.props.todo.id)} className="handDelet">X</h3>
                </li>
            </div>
        )
    }
}
