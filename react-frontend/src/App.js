import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import NotFound from './pages/NotFound';
import BookRoutes from './routes/BookRoutes';

function App() {
	return (
		<div className="App">
			{/* <Routes location={'/books'}>
				<Route path="/books" element={<h1>Books Special Content</h1>} />
			</Routes> */}
			<nav>
				<ul>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/books'}>Books</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books/*" element={<BookRoutes />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
