import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import './server';
import VanDetails from './pages/VanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/host/Dashboard';
import Income from './pages/host/Income';
import Reviews from './pages/host/Reviews';
import HostLayout from './pages/host/HostLayout';
import HostVans from './pages/host/HostVans';
import HostVanDetails from './pages/host/HostVanDetails';
import Pricing from './pages/host/Pricing';
import Photos from './pages/host/Photos';
import HostVanDetailsLayout from './pages/host/HostVanDetailsLayout';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="vans" element={<Vans />} />
				<Route path="vans/:vanId" element={<VanDetails />} />
				<Route path="host" element={<HostLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="vans" element={<HostVans />} />

					<Route path="vans/:id" element={<HostVanDetailsLayout />}>
						<Route index element={<HostVanDetails />} />
						<Route path="pricing" element={<Pricing />} />
						<Route path="photos" element={<Photos />} />
					</Route>
					<Route path="income" element={<Income />} />
					<Route path="reviews" element={<Reviews />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
