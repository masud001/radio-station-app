import React, { Component } from 'react';
import AppStyle from './App.module.css';
import Header from './Header/Header';
import Station from './Station/Station';
import { getStations } from '../Data';
import Footer from './Footer/Footer';
type StationState = {
	currentStation: null;
	stations: any;
	isLoading: boolean;
	failed: boolean;
	footerStation: string;
};
export class App extends Component<{}, StationState> {
	state = {
		currentStation: null,
		isLoading: false,
		failed: false,
		stations: [],
		footerStation: '',
	};

	componentDidMount() {
		getStations()
			.then((value) => {
				this.setState({
					stations: value,
					isLoading: false,
				});
			})
			.catch((error) => {
				console.log('Error :', error.message);

				this.setState({
					isLoading: false,
					failed: true,
				});
			});
	}

	// switch on/off function on header
	switchOff = () => {
		this.setState({
			currentStation: null,
		});
	};

	// go to back button on header
	handelBack = () => {
		console.log('go to back !');
	};

	// show station name on footer on click function
	showStation = (arg: null): void => {
		const station = this.state.currentStation === arg ? null : arg;
		this.setState({
			currentStation: station,
		});
	};

	render() {
		return (
			<React.Fragment>
				<section className={AppStyle.radio__station_wrapper}>
					{/* header START  */}
					<Header name='Stations' handelClick={this.switchOff} goBack={this.handelBack} />
					{/* header END  */}

					{/* main station  */}
					<div className={AppStyle.radio_stations}>
						<ul className={AppStyle.radio_stations_list}>
							{this.state.stations &&
								this.state.stations.map((station: any, i) => (
									<li key={i}>
										<Station
											name={station.name}
											frequency={station.frequency}
											onStationClick={this.showStation}
											isCurrentlyPlaying={
												this.state.currentStation === station.name
											}
										/>
									</li>
								))}
						</ul>
					</div>

					{/* footer  */}

					<div className={AppStyle.footer__wrapper}>
						{this.state.currentStation && (
							<Footer stationName={this.state.currentStation} />
						)}
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default App;
