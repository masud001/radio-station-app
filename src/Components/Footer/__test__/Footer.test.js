import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';

it('Footer Render Without Crashing', () => {
	const footer = document.createElement('footer');
	ReactDOM.render(<Footer></Footer>, footer);
	ReactDOM.unmountComponentAtNode(footer);
});
