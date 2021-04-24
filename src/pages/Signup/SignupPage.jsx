import React from 'react'

export default class SignupPage extends React.Component {

    state= {
        name: "",
        email: "", 
        password: "",
        confirm: "",
        error: "",
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name] : evt.target.value})
    }

    
    handleSubmit = async (evt) => {
        evt.preventDefault();

        try { 

        let fetchResponse = await fetch('/api/users/signup', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name: this.state.name, email: this.state.email, password: this.state.password })
        })

        if (!fetchResponse.ok) throw new Error ('fetch failed!')

        let token = await fetchResponse.json()
        localStorage.setItem('token', token)

        const userDoc = JSON.parse(atob(token.split('.')[1])).user;
        this.props.putUserIntoState(userDoc)

    } catch(err) {
        console.log("Signup Error", err) 
        this.setState({ error: 'Signup Failed. Please try again!'})
    }
    }


    render() {
        let buttonDisabled = false; 
        if (this.state.password != this.state.confirm) {
            buttonDisabled = true; 
        } else {
            buttonDisabled = false; 
        }
        
    return(
        <div>
            <form>
            welcome to karmik! please sign up below <br />
            <input value={this.state.name} placeholder='NAME' name='name' required onChange={this.handleChange}/><br />
            <input value={this.state.email} placeholder='E-MAIL'name='email' type='email' required onChange={this.handleChange}/><br />
            <input value={this.state.password} placeholder='PASSWORD' name='password' type='password' required onChange={this.handleChange}/><br />
            <input value={this.state.confirm} placeholder='CONFIRM PASSWORD' name='confirm' type='password' required  onChange={this.handleChange}/><br />
            
            
            <button disabled={buttonDisabled} onClick={this.handleSubmit}>Sign up!</button>
            </form>

            {this.state.error}
            <br />

        </div>
    )
    }
}