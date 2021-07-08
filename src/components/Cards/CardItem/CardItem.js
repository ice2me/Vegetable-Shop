import React from 'react'
import './CardItem.css'
import plus from '../../../img/plus.svg'
import plusChecked from '../../../img/active.svg'
import unliked from '../../../img/favorit-unliked.svg'

export default function CardItem({ name, price, src, key, onClickFavorite, onPlus }) {
	const [isAdded, setIsAdded] = React.useState(false)
	const onClickPlus = () => {
		onPlus({name, price, src})
		setIsAdded(!isAdded)
	}


	return (
		<div className="card-item" key={key}>
			<div className="card-item__favorite" onClick={onClickFavorite}>
				<img src={unliked} alt="" />
			</div>
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
				<img
					src={isAdded ? plusChecked : plus}
					alt="plus"
					className='card-item__button'
					onClick={onClickPlus} />
			</div>
		</div>
	)
}


