import React from 'react'
import './Cards.css'
import CardItem from './CardItem/CardItem'

export default function Cards() {
	return (
		<div className="cards">
			<h2 className="cards-name">
				All items
			</h2>
			<div className="cards-block">
				<CardItem />
				<CardItem />
				<CardItem />
				<CardItem />
				<CardItem />
				<CardItem />
				<CardItem />
				<CardItem />
			</div>
			
		</div>
	)
}
