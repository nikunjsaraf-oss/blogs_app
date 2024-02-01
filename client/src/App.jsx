import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import About from './pages/about';
import Projects from './pages/projects';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Header from './components/header';

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/sign-in' element={<Signin />} />
				<Route path='/sign-up' element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}
