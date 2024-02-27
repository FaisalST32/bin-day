import React from 'react';
import { IonButton } from '@ionic/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Swiper as SwiperInterface } from 'swiper';
import { useState } from 'react';
import './Welcome.less';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@ionic/react/css/ionic-swiper.css';
import { ChooseCycle } from '../ChooseCycle/ChooseCycle';
import { CollectionType } from '../../types/collection.types';
import { Confirmation } from '../Confirmation/Confirmation';

export const Welcome: React.FC = () => {
	const [slidesRef, setSlidesRef] = useState<SwiperInterface>();
	const [confirmationData, setConfirmationData] = useState<{
		code: string;
		next: CollectionType;
	}>();
	const swiper = useSwiper();

	const slideWillChange = () => {
		console.log('Slide will change');
	};

	const slideDidChange = () => {
		console.log('Slide did change');

		if (!slidesRef) return;

		console.table({
			isBeginning: slidesRef.isBeginning,
			isEnd: slidesRef.isEnd,
		});
	};

	return (
		<Swiper
			// modules={[IonicSlides]}
			// pagination={true}
			style={{ height: '100%' }}
			onSwiper={setSlidesRef}
			slidesPerView={1}
			draggable={false}
			noSwiping
			allowTouchMove={false}
		>
			<SwiperSlide>
				<div className='slide-1'>
					<div className='logo-container'>
						<img
							src={
								new URL(
									'../../assets/Bin_Day.png',
									import.meta.url
								).href
							}
						/>
					</div>
					<div className='image-container'>
						<img
							src={
								new URL('../../assets/bin.jpg', import.meta.url)
									.href
							}
						/>
					</div>
					<div className='slide-text'>
						<div>
							Welcome to <strong>Bin Day</strong>!
						</div>
						<br />
						<div>
							The answer to the question,{' '}
							<em>"Is it bin day today, honey?"</em>
						</div>
						<div className='button'>
							<IonButton
								onClick={() => {
									console.log('sliding next');
									slidesRef?.slideNext();
								}}
								color='primary'
								fill='outline'
								size='default'
							>
								Take me there!
							</IonButton>
						</div>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<ChooseCycle
					next={(code: string, next: CollectionType) => {
						setConfirmationData({ code, next });
						slidesRef?.slideNext();
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<Confirmation
					collectionCode={confirmationData?.code}
					nextCollection={confirmationData?.next}
				/>
			</SwiperSlide>
			{/* <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide> */}
		</Swiper>
	);
};
