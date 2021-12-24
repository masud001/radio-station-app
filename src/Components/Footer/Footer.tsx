import React, { Component } from 'react';
import FooterStyle from './Footer.module.css';
type FooterProps = {
	stationName: string;
};
const Footer: React.FC<FooterProps> = ({ stationName }) => {
	return (
		<React.Fragment>
			<footer className={FooterStyle.radio__station_footer}>
				<span className={FooterStyle.radio__station_footer_header}>currently playing</span>
				<span className={FooterStyle.radio__station_footer_station_name}>
					{stationName}
				</span>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
