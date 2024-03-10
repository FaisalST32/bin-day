import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
import { settingsSharp } from 'ionicons/icons';
import { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { Pie } from '../components/CircleProgress/CircleProgress';
import { binColorMap } from '../data.ts/collection.data';
import {
	getDaysToBinColors,
	getNextCollection,
} from '../services/data.service';
import { getSettings } from '../services/settings.service';
import { CollectionType } from '../types/collection.types';
import './Home.less';
import { SettingsType } from './Settings';
import { getTimeOfDay } from '../utils/common.utils';

export const HomePage: React.FC = () => {
	const [transitionedDaysLeft, setTransitionedDaysLeft] = useState<number>(7);
	const [transitionOver, setTransitionOver] = useState(false);
	const history = useHistory();

	const [settings, setSettings] = useState<SettingsType>();

	const nextCollection = useMemo(() => {
		if (!settings?.general?.collectionCode) {
			return;
		}
		return { ...getNextCollection(settings?.general?.collectionCode) };
	}, [settings?.general?.collectionCode]);

	const daysLeft = useMemo(() => {
		if (!nextCollection) {
			return;
		}
		return Math.ceil(
			(new Date((nextCollection as CollectionType).date).getTime() -
				new Date().getTime()) /
				60 /
				60 /
				24 /
				1000
		);
	}, [nextCollection]);

	const upcomingCollections: { color: string; days: number }[] =
		useMemo(() => {
			if (!settings?.general?.collectionCode) {
				return [];
			}
			const daysToBin = getDaysToBinColors(
				settings?.general?.collectionCode
			);
			if (!daysToBin) {
				return [];
			}
			return Object.keys(daysToBin)
				.map((color) => {
					return {
						color,
						days: Math.ceil(
							(new Date(
								(
									daysToBin?.[color]
										.collection as CollectionType
								).date
							).getTime() -
								new Date().getTime()) /
								60 /
								60 /
								24 /
								1000
						),
					};
				})
				.sort((a, b) => a.days - b.days);
		}, [settings?.general?.collectionCode]);

	const maxCollection = useMemo(() => {
		return Math.max(...(upcomingCollections?.map((c) => c.days) ?? []));
	}, [upcomingCollections]);

	useEffect(() => {
		const settings = getSettings();
		const unlisten = history.listen(async () => {
			const settings = getSettings();
			setSettings({ ...settings });
		});
		if (!settings.general?.collectionCode) {
			history.push('/onboarding');
			return;
		}
		setSettings(settings);
		return unlisten;
	}, [history]);

	useEffect(() => {
		if (daysLeft === undefined || !settings?.general?.collectionCode) {
			return;
		}
		let val = 7;
		const interval = setInterval(() => {
			if (val === daysLeft) {
				clearInterval(interval);
				setTransitionOver(true);
				return;
			}
			val -= 0.1;
			val = Math.round(val * 100) / 100;
			setTransitionedDaysLeft(val);
		}, 10);
	}, [daysLeft, settings?.general?.collectionCode]);

	return (
		<IonPage className='home-page'>
			<IonHeader className='icon-header ion-no-border'>
				<IonToolbar color='red'>
					<IonButtons slot='end'>
						<IonButton
							fill='clear'
							onClick={() => {
								history.push('/settings');
							}}
						>
							<IonIcon
								icon={settingsSharp}
								style={{ fontSize: 25 }}
							/>
						</IonButton>
					</IonButtons>
					<IonTitle>
						<img
							src={
								new URL(
									'../assets/Bin_Day.png',
									import.meta.url
								).href
							}
						/>
					</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				{!!settings?.general?.collectionCode && !!nextCollection && (
					<div className='home-root'>
						<div className='content'>
							<div className='greeting'>
								Good {getTimeOfDay()}, <br />
								{settings.general.name || 'Stranger'}
							</div>
							<div className='countdown'>
								<div className='chart'>
									<Pie
										colour='#f15025'
										percentage={
											((7 - transitionedDaysLeft) / 7) *
											100
										}
									/>
								</div>
								<div className='chart-text'>
									{daysLeft === 0 ? (
										<>
											<div className='collection-day-zero'>
												It's <br /> Collection <br />{' '}
												Day!
											</div>
											{/* <div className='days-remaining-label'>
												Collection
												<br /> Day
											</div> */}
											<div className='next-label'>
												Collecting today{' '}
											</div>
										</>
									) : (
										<>
											<div className='days-remaining'>
												{daysLeft}
											</div>
											<div className='days-remaining-label'>
												day{daysLeft === 1 ? '' : 's'}{' '}
												to go
											</div>
											<div className='next-label'>
												Collecting next on{' '}
												<strong>
													{new Date(
														(
															nextCollection as CollectionType
														).date
													).toLocaleString('en-us', {
														weekday: 'long',
													})}
												</strong>
											</div>
										</>
									)}
									<div className='next-bin-colors'>
										{(
											nextCollection as CollectionType
										).color.map((bin) => {
											const binColor = bin
												.split(' ')[0]
												.toLowerCase();
											return (
												<div
													className='bin'
													key={binColor}
												>
													<div
														style={{
															background:
																binColorMap[
																	binColor
																],
														}}
														className='color-label'
													>
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
						<div className='upcoming-label'>
							Upcoming Collections
						</div>
						<div className='upcoming-collections-container'>
							<div className='red'></div>
							{upcomingCollections.map((c) => {
								return (
									<div
										className='upcoming-collection'
										key={c.color}
									>
										<div
											style={{
												width: 100,
												flexShrink: 0,
											}}
										>
											<div
												className={[
													'collection-box-label',
													c.color,
												].join(' ')}
											>
												<div className='collection-label-text'>
													{c.color[0].toUpperCase() +
														c.color.slice(1)}
												</div>
											</div>
										</div>
										<div
											style={{
												width: '100%',
											}}
										>
											<div
												className={[
													'progress-bar',
													c.color,
												].join(' ')}
												style={{
													width: transitionOver
														? `calc(${
																((maxCollection -
																	c.days) /
																	maxCollection) *
																100
														  }% + 20px)`
														: 0,
												}}
											>
												<div
													className={[
														'progress-bar',

														c.color,
														'overlapping',
													].join(' ')}
													style={{
														width: 'calc(100vw - 120px)',
														background: 'white',
													}}
												></div>
											</div>
										</div>

										{c.days === 0 ? (
											<div className='progress-label'>
												Collecting Today
											</div>
										) : (
											<div className='progress-label'>
												{c.days} day
												{c.days === 1 ? '' : 's'} left
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
				)}
			</IonContent>
		</IonPage>
	);
};
