import React from 'react';

const Card = props => {
    return(
        <div className="card text-center">
            <div className = "overflow">
                <img src={props.imgsrc} alt="image 1" className="pic"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"> Days</h4>
                <p className="card-text text-secondary">
                    Cards go here! Make sure to place cards here.
                </p>
                <button href="#" className="btn-btn" type="button">Go Anywhere</button>
            </div>
        </div>
    );
};

export default Card;