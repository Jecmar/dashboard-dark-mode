import React from 'react';
import './card-small.css'

export default function CardSmall({icon,pageview,growth}) {
    return(
        <div className="card-small">
            <p className="card-small-views">Page views</p>
            <p className="card-small-icon">
                <img src={icon} alt=""/>
            </p>
            <p className="card-small-total">{pageview}</p>
            <p className="card-small-per">
                <span>
                    <img src="img/icon-up.svg" alt=""/>
                    {growth}%
                </span>
            </p>
        </div>
    )
}