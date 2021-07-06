import React from 'react'
import './CardItem.css'
import img from '../../../img/img.jpg'
import plus from '../../../img/plus.svg'

export default function CardItem() {
	return (
		<div className="card-item">
			<img src={img} alt="" className="card-item__img" width={133} height={112} />
			<p className="card-item__title">
				Lorem ipsum dolor sit.
			</p>
			<div className="card-item__block">
				<div>
					<p className="card-item__price">
						Price
					</p>
					<b className="card-item__cost">
						12 999 $
					</b>
				</div>
				<button className="card-item__button">
					<img src={plus} alt="plus" width={11} height={11}/>
				</button>
			</div>

		</div>
	)
}


