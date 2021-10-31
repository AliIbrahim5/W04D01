

import React, { Component } from 'react'

export default class Todoitem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <li>
                    <h3>{this.props.obj.name}</h3>
                    <h3 onClick={()=> this.props.handlDel(this.props.todo.id)}>X</h3>
                </li>
            </div>
        )
    }
}
