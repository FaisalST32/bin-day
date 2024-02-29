import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { cog } from 'ionicons/icons';
import './Home.less';
import { Pie } from '../components/CircleProgress/CircleProgress';
import { useMemo, useState, useEffect } from 'react';
import { getNextCollection } from '../services/data.service';
import { CollectionType } from '../types/collection.types';
import { binColorMap } from '../data.ts/collection.data';

export const HomePage: React.FC = () => {
	const [transitionedDaysLeft, setTransitionedDaysLeft] = useState<number>(7);

	const code = useMemo(() => {
		return window.localStorage.getItem('collectionCode') || '';
	}, []);

	const nextCollection = useMemo(() => {
		return getNextCollection(code);
	}, []);

	const daysLeft = useMemo(() => {
		return Math.ceil(
			(new Date((nextCollection as CollectionType).date).getTime() -
				new Date().getTime()) /
				60 /
				60 /
				24 /
				1000
		);
	}, [nextCollection]);

	useEffect(() => {
		let val = 7;
		const interval = setInterval(() => {
			if (val === daysLeft) {
				clearInterval(interval);
				return;
			}
			val -= 0.1;
			val = Math.round(val * 100) / 100;
			setTransitionedDaysLeft(val);
		}, 50);
	}, [daysLeft]);

	return (
		<IonPage>
			<IonContent>
				<div className='home-root'>
					<div className='header'>
						<div className='logo'>
							<img
								src={
									new URL(
										'../assets/Bin_Day.png',
										import.meta.url
									).href
								}
							/>
						</div>
						<div className='code'>
							<IonIcon icon={cog} style={{ fontSize: 25 }} />
						</div>
					</div>
					<div className='content'>
						<div className='greeting'>
							Good Morning, <br />
							Stranger
						</div>
						<div className='countdown'>
							<div className='chart'>
								<Pie
									colour='#f15025'
									percentage={
										((7 - transitionedDaysLeft) / 7) * 100
									}
								/>
							</div>
							<div className='chart-text'>
								<div className='days-remaining'>{daysLeft}</div>
								<div className='days-remaining-label'>
									days to go
								</div>
								<div className='next-label'>
									Collecting next on{' '}
									{new Date(
										(nextCollection as CollectionType).date
									).toLocaleString('en-us', {
										weekday: 'long',
									})}
								</div>
								<div className='next-bin-colors'>
									{(
										nextCollection as CollectionType
									).color.map((bin) => {
										const binColor = bin
											.split(' ')[0]
											.toLowerCase();
										return (
											<div className='bin' key={binColor}>
												<div
													className='color-box'
													style={{
														background:
															binColorMap[
																binColor
															],
													}}
												></div>
												<div className='color-label'>
													{binColor[0].toUpperCase() +
														binColor.slice(1)}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div className='color-wise'></div>
					</div>
				</div>
			</IonContent>
		</IonPage>
	);
};
