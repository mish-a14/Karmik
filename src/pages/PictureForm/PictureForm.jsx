import React from 'react';
import {Link} from 'react-router-dom';


class PictureForm extends React.Component {
  state = {
    board: "",
    url: ""
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleOnClick = async evt => {
    evt.preventDefault();
    try {
      let jwt = localStorage.getItem("token");
      let fetchResponse = await fetch("/api/picture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + jwt
        },
        body: JSON.stringify({
          board: this.state.board,
          url: this.state.url

        })
      });
      let serverResponse = await fetchResponse.json();
      console.log("Success:", serverResponse);
      console.log(serverResponse);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  render() {
    return (
      <>
        <nav>
          <Link to="/board">go back to boards</Link>
        </nav>
        <div className="board-form">
          <form>
            <div className="form">
              Add Picture? {" "}
              <input
                name="url"
                value={this.state.url}
                onChange={this.handleChange}
              />
              To which board?
              <input 
              name="board"
              value={this.state.board}
            onChange={this.handleChange}
            />
              <button
                onClick={evt => {
                  this.handleOnClick(evt);
                }}
              >
                <Link to="/board">Add Picture</Link>
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default PictureForm;