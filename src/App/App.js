import Header from '../Header/Header'
import Cards from '../components/Cards/Cards'
import Drawer from '../components/Drawer/Drawer'
import './App.css'


export default function App() {
	return (
		<div className="wrapper">
			<Header />
			<Cards arr={arr} />
			<Drawer />
		</div>
	)
}




const arr = [
	{
		src: '/images/img.jpg',
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '12 999',
		id: '1',
	},
	{
		src: '/images/image5.jpg',
		name: 'Мужские Кроссовки Nike Air Max 270',
		price: '13 999',
		id: '2',
	},
	{
		src: '/images/image6.jpg',
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '14 999',
		id: '3',
	},
	{
		src: '/images/image7.jpg',
		name: 'Кроссовки Puma X Aka Boku Future Rider',
		price: '15 999',
		id: '4',
	},
	{
		src: '/images/img.jpg',
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '12 999',
		id: '5',
	},
	{
		src: '/images/image7.jpg',
		name: 'Кроссовки Puma X Aka Boku Future Rider',
		price: '15 999',
		id: '8',
	},
	{
		src: '/images/image5.jpg',
		name: 'Мужские Кроссовки Nike Air Max 270',
		price: '13 999',
		id: '6',
	},
	{
		src: '/images/image6.jpg',
		name: 'Мужские Кроссовки Nike Blazer Mid Suede',
		price: '14 999',
		id: '7',
	},

]