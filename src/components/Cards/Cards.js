import React from 'react'
import './Cards.css'
import CardItem from './CardItem/CardItem'
import search from '../../img/Search.svg'

export default function Cards() {
	return (
		<div className="cards">
			<div className="cards-title">
				<h2 className="cards-name">
					All items
				</h2>
				<div className="cards-input">
					<img src={search} alt="Search" />
					<input placeholder="Search..." />
				</div>

			</div>
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
