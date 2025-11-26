import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Redirect from './components/Redirect';
import './App.css';
import Navbar from './components/Navbar';
import { UserProvider } from './context/UserContext';
import History from './pages/History';

function App() {
	return (
		<UserProvider>
		<BrowserRouter>
		<Navbar/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route
					path='/login'
					element={
						<Redirect>
							<Login />
						</Redirect>
					}
				/>
				<Route
					path='/signup'
					element={
						<Redirect>
							<Signup />
						</Redirect>
					}
				/>
				  <Route path="/extract_history" element={<History />} />
			
			</Routes>
		</BrowserRouter>
		</UserProvider>
	);
}

export default App;