import React from 'react';

import CardItem from './CardItem';

import './Cards.css'

const Cards = () => {
    return (
        <div className="cards">
            <h1>
                Explore Our Epic Services!
            </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="./images/img-7.jpg"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            label="Adventure"
                            path="/products"
                        />
                        <CardItem
                            src="./images/img-8.jpg"
                            text="It is a long established fact that a reader will be distracted by the readable content."
                            label="Food"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="./images/img-3.jpg"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            label="Night Life"
                            path="/sign-up"
                        />
                        <CardItem
                            src="./images/img-5.jpg"
                            text="It is a long established fact that a reader will be distracted by the readable content."
                            label="Luxury"
                            path="/products"
                        />
                        <CardItem
                            src="./images/img-6.jpg"
                            text="It was popularised in the 1960s with the release of Letraset sheets containing."
                            label="Peace"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
