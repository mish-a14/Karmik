import React from "react";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";

function Home(props) {
  return (
    <div className="home">
      <div className="text-half">
        <div className="text">
          <h2>what's your vision?</h2>
          <p>
            create custom vision boards to stay inspired and on track with your
            goals.
          </p>
        </div>
        <div className="btn-signup">
          <button>
            <Link to="/signup">sign up</Link>
          </button>
        </div>
      </div>

      <div className="pic-half">
        <Hidden xsDown>
          <div className="top">
            <img
              src="https://i.imgur.com/kNGf4Ve.jpg"
              className="img1"
              alt="house"
            />
          </div>
        </Hidden>
        <div className="bottom">
          <img
            src="https://i.imgur.com/OGBAbA9.jpg"
            className="img2"
            alt="car"
          />
          <Hidden xsDown>
            <img
              src="https://i.imgur.com/uDOxiFf.jpg"
              className="img3"
              alt="dog"
            />
          </Hidden>
        </div>
      </div>
    </div>
  );
}

export default Home;
