import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Images from '../Images/Images.jsx'



class BoardForm extends Component {
    handleOnClick = async (evt) => {
        evt.preventDefault()
        try {
            let fetchResponse = await fetch("/api/board", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(
                    { name: "mishalboard",
                     user: "608728bd6618a095df965d66",
                     pictures: "pictures" })
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
            Name: <input name="name" value="mishalboard" />
            User: <input name="user" value="dor" />
            pictures: <input name="pictures" value="pictures"/>
            <button onClick = {(evt) => 
            {this.handleOnClick(evt)}}>test</button>
            </form> 
            
    ) 
        
    }

    
}

export default BoardForm;