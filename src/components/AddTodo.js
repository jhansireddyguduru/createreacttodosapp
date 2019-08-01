import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form style={{display:'flex'}}>
                <input type="text" style={{flex: '10', padding: '5px'}}placeholder="add things to do"></input>
                <input type="submit" style={{flex: '1'}}></input>
            </form>
        )
    }
}
