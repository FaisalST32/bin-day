import { IonButton, IonText } from '@ionic/react';
import { CollectionType } from '../../types/collection.types';
import { CollectionCircle } from '../CollectionCircle/CollectionCircle';
import './Confirmation.less';
import Confetti from 'react-confetti';
// @ts-ignore

export type ConfirmationProps = {
	collectionCode?: string;
	nextCollection?: CollectionType;
};

export const Confirmation: React.FC<ConfirmationProps> = (props) => {
	return (
		<>
			<div className='slide-3'>
				<div>
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
					<div className='slide-text'>
						<div className='title-text'>
							<IonText color='secondary'>
								Yay!
								<br /> You're all set!
							</IonText>
						</div>
					</div>
				</div>
				<div>
					<div>Next Collection</div>
					{props.nextCollection && (
						<div className='collection'>
							<CollectionCircle
								collection={props.nextCollection}
							/>
						</div>
					)}
				</div>
				<IonButton color='primary' fill='outline'>
					Continue to App!
				</IonButton>
			</div>
			<Confetti />
		</>
	);
};
