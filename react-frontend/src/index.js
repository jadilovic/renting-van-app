import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
const value = 'dark';
root.render(
	<React.StrictMode>
		<Theme.Provider value={value}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Theme.Provider>
	</React.StrictMode>
);
