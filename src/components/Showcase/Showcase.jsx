import React from "react";
import {Link} from 'react-router-dom';


class Showcase extends React.Component {
    render() {
    return(
<div className="showcase">
  <div className="pic-name">{this.props.name}</div>
  {this.props.avatar.length > 0 ? 
  <div className="pic-pic"><img src={this.props.avatar}/></div>
  :
  <>
    <p>Nothing to see here yet...</p>
    <p>Click on a thumbnail to enlarge</p>
    <br />
    <p>No images yet?</p>
    <p>Add thumbnails by clicking the + on the left.</p>
    </>
    }
</div>
    )
}
}

export default Showcase;