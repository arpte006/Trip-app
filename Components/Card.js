import React from 'react';


const Card = props => {
    return(
          
        <div className="col-sm-3">
            <div className="card">
                <img className="card-img-top img-fluid" src={props.itemName} alt="Card"/>
          
            </div>
        </div>
    )
}

export default Card;