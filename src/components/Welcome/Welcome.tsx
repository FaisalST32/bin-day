import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInterface } from 'swiper';
import { useState } from 'react';
import './Welcome.less';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
import { ChooseCycle } from '../ChooseCycle/ChooseCycle';
import { CollectionType } from '../../types/collection.types';
import { Confirmation } from '../Confirmation/Confirmation';
import { GreetingSlide } from '../Greeting/Greeting';

export const Welcome: React.FC = () => {
	const [slidesRef, setSlidesRef] = useState<SwiperInterface>();
	const [confirmationData, setConfirmationData] = useState<{
		code: string;
		next: CollectionType;
	}>();

	return (
		<Swiper
			style={{ height: '100%' }}
			onSwiper={setSlidesRef}
			slidesPerView={1}
			draggable={false}
			noSwiping
			allowTouchMove={false}
		>
			<SwiperSlide>
				<GreetingSlide
					next={() => {
						slidesRef?.slideNext();
					}}
				/>
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
		</Swiper>
	);
};
