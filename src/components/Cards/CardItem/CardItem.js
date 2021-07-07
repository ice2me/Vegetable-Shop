import React from 'react'
import './CardItem.css'
import plus from '../../../img/plus.svg'

export default function CardItem({ name, price, src, key, onClick }) {

	return (
		<div className="card-item" key={key}>
			<img src={src} alt={name} className="card-item__img" width={133} height={112} />
			<p className="card-item__title">
				{name}
			</p>
			<div className="card-item__block">
				<div>
					<p className="card-item__price">
						Price
					</p>
					<b className="card-item__cost">
						{price} $
					</b>
				</div>
				<button className="card-item__button" onClick={onClick}>
					<img src={plus} alt="plus" width={11} height={11} />
				</button>
			</div>
		</div>
	)
}


