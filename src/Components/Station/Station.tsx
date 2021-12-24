import React, { Component } from 'react';
import MediaPlayer from '../MediaPlayer/MediaPlayer';
import StationStyle from './Station.module.css';

interface StationProps {
	name: any;
	frequency: any;
	onStationClick(arg: null): any;
	isCurrentlyPlaying: boolean;
}

const Station: React.FC<StationProps> = ({
	name,
	frequency,
	isCurrentlyPlaying,
	onStationClick,
}) => {
	return (
		<React.Fragment>
			{isCurrentlyPlaying && <MediaPlayer />}
			<main className={StationStyle.radio__station} onClick={() => onStationClick(name)}>
				<span className={StationStyle.radio__station_name}>{name}</span>
				<span className={StationStyle.radio__station_frequency}>{frequency}</span>
			</main>
		</React.Fragment>
	);
};

export default Station;
