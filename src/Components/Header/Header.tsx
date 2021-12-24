import React, { Component } from 'react';
import backArrow from '../../assets/images/back-arrow.png';
import switchBtn from '../../assets/images/switch.png';
import HeaderStyle from './Header.module.css';
type HeaderProps = {
	handelClick: () => void;
	goBack: () => void;
	name: string;
};
const Header: React.FC<HeaderProps> = ({ handelClick, goBack, name }) => {
	return (
		<React.Fragment>
			<header data-testid='header' className={HeaderStyle.radio__station_header}>
				<div className={HeaderStyle.radio__station_header_icon} onClick={goBack}>
					<img data-testid='back-arrow-image' src={backArrow} alt='Back arrow' />
				</div>
				<span data-testid='header-text'>{name}</span>
				<div className={HeaderStyle.radio__station_header_icon} onClick={handelClick}>
					<img data-testid='switch-on-off-image' src={switchBtn} alt='Switch on/off' />
				</div>
			</header>
		</React.Fragment>
	);
};

export default Header;
