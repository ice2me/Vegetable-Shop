import React from 'react'

import './Cards.css'

import CardItem from './CardItem/CardItem'
import search from '../../img/Search.svg'

export default function Cards({ arr, onAddToCard}) {
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
				{arr.map((item) => (
					<CardItem
						name={item.name}
						price={item.price}
						src={item.src}
						key={item.id}
						onClickFavorite={() => console.log('press favorite')}
						onPlus={(obj) => onAddToCard(obj)}
					/>
				))}
			</div>
		</div>
	)
}


