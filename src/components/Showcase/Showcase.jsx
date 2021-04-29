import React from "react";
import {Link} from 'react-router-dom';


class Showcase extends React.Component {
    render() {
    return(
<div className="showcase">
{/* {props.board.length > 0 ? ( */}
  <>
    <div className="btn-div">
      <button
        onClick={evt => {
          this.handleOnClick(evt);
        }}
      >
        <Link to="/board">+</Link>
      </button>
    </div>
  </>
) : (
  <>
    <p>
      looking to get started? popular board topics include: career,
      travel, and lifestyle.
    </p>
  </>
)}
</div>
    )
}
}

export default Showcase;