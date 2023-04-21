import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from '../slices/counterSlice';

export const App = () => {
	const { counter } = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const [number, setNumber] = useState(0);

	const handleNumberChange = (e) => {
		if (e.target.value === '') {
			setNumber(0);
		} else {
			setNumber(parseInt(e.target.value));
		}
	};

	return (
		<>
			<h1> Challenge 13 </h1>
			<hr />
			<h3> Counter is: {counter} </h3>
			<div className='mt-3'>
				<button
					className='btn btn-primary mx-3'
					onClick={() => dispatch(increment())}>
					+1
				</button>
				<button
					className='btn btn-primary me-3'
					onClick={() => dispatch(decrement())}>
					-1
				</button>
				<button
					className='btn btn-primary'
					onClick={() => dispatch(incrementBy(number))}>
					{number}
				</button>
				<div className='mt-3'>
					<label>Ingresa un número para incrementar:</label>
					<input
						type='number'
						onChange={handleNumberChange}
					/>
				</div>
			</div>
		</>
	);
};
