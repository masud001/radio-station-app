import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom/extend-expect';
it('Header Render Without Crashing', () => {
	const header = document.createElement('header');
	ReactDOM.render(<Header></Header>, header);
	ReactDOM.unmountComponentAtNode(header);
});

it('Render Header correctly', () => {
	render(<Header></Header>);
	expect(screen.getByTestId('header')).toBeTruthy();
	expect(screen.getByTestId('back-arrow-image')).toBeTruthy();
	expect(screen.getByTestId('header-text')).toBeTruthy();
	expect(screen.getByTestId('switch-on-off-image')).toBeTruthy();
});

it('Render Header title', () => {
	render(<Header name='Stations'></Header>);
	expect(screen.getByTestId('header-text')).toHaveTextContent('Stations');
});
