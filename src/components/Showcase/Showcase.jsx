import React from "react";
import {Link} from 'react-router-dom';


class Showcase extends React.Component {
    render() {
    return(
<div className="showcase">
  <div>{this.props.name}</div>
  <div><img src={this.props.avatar}/></div>
    <div className="btn-div">
      <button
      >
        <Link to={{
          pathname: "/pictureform",
          state: {name: this.props.name}}} >+</Link>
      </button>
    </div>
</div>
    )
}
}

export default Showcase;