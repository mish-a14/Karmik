import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Picture from '../Picture/Picture.jsx'
import './BoardForm.css'

class BoardForm extends Component {
    state= {
        name: "", 
        pictures: ""
    }


    handleChange = (evt) => {
        this.setState({ [evt.target.name] : evt.target.value})
    }
    handleOnClick = async (evt) => {
        evt.preventDefault()
        try {
            let fetchResponse = await fetch("/api/board", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(
                    {name: this.state.name,
                     pictures: this.state.pictures })
            })
            let serverResponse = await fetchResponse.json()
            console.log("Success:", serverResponse)
            alert(serverResponse)
            this.setState({ name: "" })
         } catch (err) {
            console.error("Error:", err)
            }
        };

    render() {
        return(
            <>
            <nav>
                <Link to='/board'>go back to boards</Link>
            </nav>
            <div className="board-form">
            <form>
                <div className="form">
            Board Name : <input name="name" value={this.state.name} onChange={this.handleChange} />
            Add Picture? : <input name="pictures" value={this.state.pictures} onChange={this.handleChange}/>
            <button onClick = {(evt) => 
            {this.handleOnClick(evt)}}>Add Board</button>
            </div>
            </form> 
            </div>
            </>
    ) 
    }
}

export default BoardForm;