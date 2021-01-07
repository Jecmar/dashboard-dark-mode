import React from 'react';
import CardSmall from './card-small.js';
import './overview.css'

const cardsmallList = [
    {
        icon:'img/facebook.png',
        pageview:'40',
        growth: 3,
        key:1,
    },
    {
        icon:'img/twitter.png',
        pageview:'30',
        growth: 3,
        key:2,
    },
    {
        icon:'img/instagram.png',
        pageview:'75',
        growth: 3,
        key:3,
    },
    {
        icon:'img/youtube.png',
        pageview:'100',
        growth: 3,
        key:4,
    }
]

function Overview() {
    return(
        <section className="overview">
            <div className="wrapper"> 
                <h2>Overview - Today</h2>           
                <div className="grid">  
                {
                    cardsmallList.map(({icon, pageview, growth, key}) => (
                    <CardSmall
                    icon={icon}
                    pageview={pageview}
                    growth={growth}
                    key={key}
                    />
                    ))
                }                             
                </div>
            </div>        
        </section>
    )
}

export default Overview