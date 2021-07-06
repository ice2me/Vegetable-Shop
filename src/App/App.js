import Header from '../Header/Header'
import Cards from '../components/Cards/Cards'
import Drawer from '../components/Drawer/Drawer'
import './App.css'

export default function App() {
	return (
		<div className="wrapper">
			<Header />
			<Cards />
			<Drawer />
		</div>
	)
}

