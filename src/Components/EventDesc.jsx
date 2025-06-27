import React from 'react';
import './EventDesc.css';

const relatedEvents = [
    {
        id: 1,
        image: './../src/assets/test_back_1.jpg',
        day: '20',
        month: 'OCT',
        title: 'Tournoi de Charity Battle Royale',
        description: 'Rejoignez des streamers et joueurs de tous niveaux dans une compétition amicale.',
    },
    {
        id: 2,
        image: './../src/assets/test_back_3.jpg',
        day: '20',
        month: 'OCT',
        title: 'Tournoi de Charity Battle Royale',
        description: 'Rejoignez des streamers et joueurs de tous niveaux dans une compétition amicale.',
    },
    {
        id: 3,
        image: './../src/assets/fadizaml.png',
        day: '20',
        month: 'OCT',
        title: 'Tournoi de Charity Battle Royale',
        description: 'Rejoignez des streamers et joueurs de tous niveaux dans une compétition amicale.',
    },
    {
        id: 4,
        image: './../src/assets/test_back_5.jpg',
        day: '20',
        month: 'OCT',
        title: 'Tournoi de Charity Battle Royale',
        description: 'Rejoignez des streamers et joueurs de tous niveaux dans une compétition amicale.',
    },
    {
        id: 5,
        image: './../src/assets/test_back_2.jpeg',
        day: '20',
        month: 'OCT',
        title: 'Tournoi de Charity Battle Royale',
        description: 'Rejoignez des streamers et joueurs de tous niveaux dans une compétition amicale.',
    },
    {
        id: 6,
        image: './../src/assets/test_back_4.jpg',
        day: '20',
        month: 'OCT',
        title: 'Tournoi de Charity Battle Royale',
        description: 'Rejoignez des streamers et joueurs de tous niveaux dans une compétition amicale.',
    },
];

const EventDesc = () => {
    return (
        <div className="event-page">
            <header className="event-header">
                <div className="header-content">
                    <h1>Tournoi de Charity Battle Royale</h1>
                    <p>Rejoignez des streamers et joueurs de tous niveaux dans une compétition amicale !</p>
                    <button className="join-button">Faites un don!</button>
                </div>
            </header>
            <div className="event-container">
                <div className="top-section">
                    <div className="event-description">
                        <h2>Description</h2>
                        <p>
                            Rejoignez-nous le 20 octobre 2024 pour un tournoi en ligne exceptionnel où fun et solidarité se rencontrent !
                            Rassemblez vos amis, formez des équipes, et affrontez d'autres joueurs dans une compétition amicale et intense.
                            L'intégralité des frais d'inscription sera reversée à une association caritative pour soutenir une cause importante.
                            En participant, vous aurez également la chance de remporter des prix exclusifs. Que vous soyez pro ou amateur,
                            ce tournoi est ouvert à tous ! Jouons ensemble pour faire la différence et montrer que le gaming peut aussi être un outil de solidarité.
                        </p>
                    </div>
                    <div className="tags">
                        <h2>Tags</h2>
                        <div className="tag-list">
                            <span className="tag">TournoiSolidaire</span>
                            <span className="tag">GamingForGood</span>
                            <span className="tag">Gaming</span>
                            <span className="tag">Esports</span>
                        </div>
                    </div>
                </div>
                <div className="bottom-section">
                    <div className="event-date">
                        <h2>Date</h2>
                        <p>20 octobre 2024</p>
                    </div>
                    <div className="event-social-link">
                        <h2>Partager avec vos amis</h2>
                        <div className="social-icons" id="social-icons-id">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related-events-section">
                <h3>Autre evenements que vous pourriez aimer</h3>
                <div className="related-events-grid">
                    {relatedEvents.map((event) => (
                        <div key={event.id} className="related-event-card">
                            <img src={event.image} alt="Event" />
                            <div className="related-event-card-info">
                                <div className="related-event-date">
                                    <span className="month">{event.month}</span>
                                    <span className="day">{event.day}</span>
                                </div>
                                <div className="related-event-details">
                                    <h4>{event.title}</h4>
                                    <p>{event.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventDesc;
