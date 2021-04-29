import React from "react";
import {Link} from 'react-router-dom';


class Showcase extends React.Component {
    render() {
    return(
<div className="showcase">
  <div className="pic-name">{this.props.name}</div>
  <div className="pic-pic"><img src={this.props.avatar}/></div>
</div>
    )
}
}

export default Showcase;