import React from 'react';
import './card.css';

function Card({username, followers, today, icon, color}) {
    const classcolor = `card ${color}`;    
    return(
        <article className={classcolor}>
            <p className="card-title">
                <img src={icon} alt=""/>
                @{username}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">FOLLOWERS</span>
            </p>
            <p className="card-today">
                <img src="img/icon-up.svg" alt=""/>
                {today} Today
            </p>
        </article>
    )
}

export default Card