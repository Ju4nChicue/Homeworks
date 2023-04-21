import {
	Navigate,
	Route,
	Routes,
	BrowserRouter as Router,
} from 'react-router-dom';

import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavComponent } from '../components/NavComponent';

export const MainApp = () => {
	return (
		<>
			<Router>
				<NavComponent />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</Router>
		</>
	);
};
