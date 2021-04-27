import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Images from '../Images/Images.jsx'



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

            <form>
            Name: <input name="name" value={this.state.name} onChange={this.handleChange} />
            Add Pictures: <input name="pictures" value={this.state.pictures} onChange={this.handleChange}/>
            <button onClick = {(evt) => 
            {this.handleOnClick(evt)}}>test</button>
            </form> 
            
    ) 
        
    }

    
}

export default BoardForm;