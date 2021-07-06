import React from 'react'
import img from '../../img/img.jpg'
import x from '../../img/x.svg'
import arrow from '../../img/Arrow.svg'
import './Drawer.css'


export default function Drawer() {
	return (
		<div className="overlay" style={{display: 'none'}}>
			<div className="drawer">
				<h2 className="drawer-title">
					Basket
					<img src={x} alt="remote" width={40} height={40} />
				</h2>
				<div className="drawer-block">
					<div className="drawer-block__card">
						<img src={img} alt="img" width={70} height={70} />
						<div className="drawer-block__card-content">
							<p className="drawer-block__card-content__name">
								Lorem, ipsum dolor sit.
							</p>
							<span className="drawer-block__card-content__cost">
								12 999 $
							</span>
						</div>
						<img src={x} alt="remote" width={11} height={11} className="drawer-block__card-content__delete"/>
					</div>
					<div className="drawer-block__card">
						<img src={img} alt="img" width={70} height={70} />
						<div className="drawer-block__card-content">
							<p className="drawer-block__card-content__name">
								Lorem, ipsum dolor sit.
							</p>
							<span className="drawer-block__card-content__cost">
								12 999 $
							</span>
						</div>
						<img src={x} alt="remote" width={11} height={11} className="drawer-block__card-content__delete"/>
					</div>
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
