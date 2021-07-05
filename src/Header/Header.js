import React from 'react'
import './Header.css'

import logo from '../img/logo.png'
import basket from '../img/Basket.svg'
import union from '../img/Union.svg'

export default function Header() {
	return (
		<div className="header">
			<a href="/" className="header-left">
				<img src={logo} alt="logo" width={40} height={40} />
				<div className="header-left__name">
					Vegetable Shop
				</div>
			</a>
			<ul className="header-right">
				<li>
					<img src={basket} alt="basket" width={18} height={18} />
					<span className="header-right__basket">
						999.99 $
					</span>
				</li>
				<li>
					<img src={union} alt="union" width={18} height={18} />
				</li>
			</ul>
		</div>
	)
}
