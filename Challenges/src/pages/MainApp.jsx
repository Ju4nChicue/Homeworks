import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
//import { NotFoundPage } from './NotFoundPage';

export const MainApp = () => {
	return (
		<>
			<h1>MainApp</h1>
			<hr />

			<div
				class='btn-group'
				role='group'
				aria-label='Basic example'>
				<NavLink
					type='button'
					className={(args) =>
						`btn btn-primary ${args.isActive ? 'active' : ''}`
					}
					to='/'>
					Home
				</NavLink>

				<Link
					type='button'
					class='btn btn-primary'
					to='/'>
					Home
				</Link>
				<Link
					type='button'
					class='btn btn-primary'
					to='/about'>
					About
				</Link>
				<Link
					type='button'
					class='btn btn-primary'
					to='/login'>
					Login
				</Link>
			</div>

			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/about'
					element={<AboutPage />}
				/>
				<Route
					path='/login'
					element={<LoginPage />}
				/>
				<Route
					path='/*'
					element={<Navigate to='/about' />}
				/>
				{/* <Route
					path='/*'
					element={<LoginPage />}
				/> */}
			</Routes>
		</>
	);
};
