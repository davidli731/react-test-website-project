import React from 'react'
import "./Cards.css";
import CardItem from "./CardItem";

function DisplayCardsTop() {
    return (
        <ul className="cards_items">
            <CardItem
                src="/img-1.jpg"
                alt="sunset"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
            />
            <CardItem
                src="/img-2.jpg"
                alt="beach"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
            />
        </ul>
    )
}

function DisplayCardsFollowing() {
    return (
        <ul className="cards_items">
            <CardItem
                src="/img-1.jpg"
                alt="sunset"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
            />
            <CardItem
                src="/img-2.jpg"
                alt="beach"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
            />
            <CardItem
                src="/img-2.jpg"
                alt="beach"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
            />
        </ul>
    )
}

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <DisplayCardsTop />
                    <DisplayCardsFollowing />
                </div>
            </div>
        </div >
    )
}

export default Cards