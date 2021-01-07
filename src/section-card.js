import React from 'react'
import Card from './card.js';
import './section-card.css'

const carlist = [
    {
        id:1,
        username: "JosueMarti",
        followers: '5678',
        today: 12,
        icon:'img/facebook.png',
        color: 'facebook',
    },
    {
        id:2,
        username: "Carlos",
        followers: '0101',
        today: 12,
        icon:'img/twitter.png',
        color: 'twitter',
    },
    {
        id:3,
        username: "Paco",
        followers: '1224',
        today: 12,
        icon:'img/instagram.png',
        color: 'instagram',
    },
    {
        id:4,
        username: "Pau",
        followers: '3234',
        today: 12,
        icon:'img/youtube.png',
        color: 'youtube',
    }
];

function Sectioncard(){
    return(
        <section className="section-card">
            <div className="wrapper">
                <div className="grid">
                    {
                        carlist.map((cardData) => <Card key={cardData.id} {...cardData} />)
                    }
                    {/*<article className="card twitter">
                        <p className="card-title">
                            <img src="img/twitter.png" alt=""/>
                            @Jecmar98
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">8</span>
                            <span className="card-followers-title">FOLLOWERS</span>
                        </p>
                        <p className="card-today">
                            <img src="img/icon-up.svg" alt=""/>
                            12 Today
                        </p>
                    </article>
                    <article className="card instagram">
                        <p className="card-title">
                            <img src="img/instagram.png" alt=""/>
                            @jecmar
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">1987</span>
                            <span className="card-followers-title">FOLLOWERS</span>
                        </p>
                        <p className="card-today">
                            <img src="img/icon-up.svg" alt=""/>
                            12 Today
                        </p>
                    </article>
                    <article className="card youtube">
                        <p className="card-title">
                            <img src="img/youtube.png" alt=""/>
                            @jecmar
                        </p>
                        <p className="card-followers">
                            <span className="card-followers-number">1987</span>
                            <span className="card-followers-title">FOLLOWERS</span>
                        </p>
                        <p className="card-today">
                            <img src="img/icon-up.svg" alt=""/>
                            12 Today
                        </p>
                    </article> */}
                </div>
            </div>
        </section>
    )
}

export default Sectioncard