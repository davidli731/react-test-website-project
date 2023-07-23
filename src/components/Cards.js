import React from 'react'
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards_container">
            <div className="cards_wrapper">
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
            </div>
        </div>
    </div>
  )
}

export default Cards