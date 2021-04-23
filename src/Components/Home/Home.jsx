import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
    return (
        <div className="home">
            <div className="text-half">
                <div className="text">
                <h2>what's your vision?</h2>
                <p>create custom vision boards to stay inspired and on track with your goals.</p>
                </div>
                <div className="btn-div">
                    <button><Link to="/auth">sign up</Link></button>
                </div>
            </div>

            <div className="pic-half">
                <div className="top">
                <img src="https://i.imgur.com/kNGf4Ve.jpg" className="img1" />
                </div>
                <div className="bottom">
                <img src="https://i.imgur.com/OGBAbA9.jpg" className="img2" />
                <img src="https://i.imgur.com/uDOxiFf.jpg" className="img3" />
                </div>
            </div>

        </div>
    )
}

export default Home;