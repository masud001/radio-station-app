import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('App Renders without crashing', () => {
	const section = document.createElement('section');
	ReactDOM.render(<App></App>, section);
	ReactDOM.unmountComponentAtNode(section);
});

// test('renders learn react link', () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });
