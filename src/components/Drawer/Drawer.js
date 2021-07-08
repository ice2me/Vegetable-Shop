import React from 'react'
import x from '../../img/x.svg'
import arrow from '../../img/Arrow.svg'
import './Drawer.css'


export default function Drawer({ onClose, items = [], cardItems }) {
	return (
		<div className="overlay">
			<div className="drawer">
				<h2 className="drawer-title">
					Basket
					<img src={x} alt="remote" width={40} height={40} onClick={onClose} />
				</h2>
				<div className="drawer-block">
					{cardItems.map((obj) => (
						<div className="drawer-block__card">
							<img src={obj.src} alt="img" width={70} height={70} />
							<div className="drawer-block__card-content">
								<p className="drawer-block__card-content__name">
									{obj.name}
								</p>
								<span className="drawer-block__card-content__cost">
									{obj.price}
								</span>
							</div>
							<img src={x} alt="remote" width={11} height={11} className="drawer-block__card-content__delete" />
						</div>
					))}

				</div>
				<div className="drawer-bottom">
					<div className="drawer-bottom__summa">
						<p>
							Summa:
						</p>
						<div></div>
						<b>
							21 498 $
						</b>
					</div>
					<div className="drawer-bottom__taxes">
						<p>
							Taxes 5%:
						</p>
						<div></div>
						<b>
							1074 $
						</b>
					</div>
					<button className="drawer-bottom__button">
						Checkout
						<img src={arrow} alt="" />
					</button>
				</div>
			</div>
		</div >
	)
}
