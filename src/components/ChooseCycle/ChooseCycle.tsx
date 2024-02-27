import { FilePicker } from '@capawesome/capacitor-file-picker';
import { useCallback, useMemo, useState } from 'react';
import { extractData } from '../../services/pdf.service';
import { CollectionType } from '../../types/collection.types';
import {
	IonAlert,
	IonButton,
	IonContent,
	IonIcon,
	IonModal,
	IonSelect,
	IonSelectOption,
} from '@ionic/react';
import {
	getCollectionCodes,
	getNextCollection,
} from '../../services/data.service';
import './ChooseCycle.less';
import {
	helpCircleOutline,
	checkmarkCircle as checkmark,
	document,
} from 'ionicons/icons';
// @ts-ignore

export type ChooseCycleProps = {
	next: (code: string, next: CollectionType) => void;
};

export const ChooseCycle: React.FC<ChooseCycleProps> = (props) => {
	const [collectionCode, setCollectionCode] = useState<string>();
	const [dates, setDates] = useState<CollectionType[]>();
	const [uploadMode, setUploadMode] = useState(false);
	const [showAlert, setShowAlert] = useState<boolean>(false);
	const [helpModalShown, setHelpModalShown] = useState<boolean>(false);
	const [nextCollection, setNextCollection] = useState<CollectionType>();

	const onSetData = useCallback(
		({
			collectionCode,
			dates,
		}: {
			collectionCode: string;
			dates: CollectionType[];
		}) => {
			setCollectionCode(collectionCode);
			setDates(dates);
			const next = getNextCollection(collectionCode, dates);
			if (next) {
				setNextCollection(next);
			} else {
				setShowAlert(true);
			}
		},
		[]
	);

	const pickFile = useCallback(async () => {
		try {
			const result = await FilePicker.pickFiles({
				multiple: false,
				types: ['application/pdf'],
			});
			const { collectionCode, dates } = await extractData(
				result.files[0]
			);
			onSetData({ collectionCode, dates });
		} catch (err) {
			console.log(err);
		}
	}, []);

	const availableCodes = useMemo(() => {
		return getCollectionCodes();
	}, []);

	return (
		<>
			<div
				className='slide-2'
				// style={{
				// 	backgroundImage: `url(${
				// 		new URL('../../assets/background.jpg', import.meta.url)
				// 			.href
				// 	})`,
				// }}
			>
				<div className='logo-container'>
					<img
						src={
							new URL('../../assets/Bin_Day.png', import.meta.url)
								.href
						}
					/>
				</div>
				{/* <div className='image-container'>
					<img
						src={
							new URL('../../assets/bin-2.png', import.meta.url)
								.href
						}
					/>
				</div> */}
				<div className='content'>
					<div className='thin'>Let's get some details first</div>

					<div
						className={[
							'slide-text',
							collectionCode ? 'disabled' : '',
						].join(' ')}
					>
						{uploadMode ? (
							<>
								<div className='title-text'>
									Upload your collection schedule booklet
								</div>
								<div className='button'>
									<IonButton
										onClick={pickFile}
										// size='small'
										fill='outline'
									>
										<IonIcon
											slot='start'
											icon={document}
										></IonIcon>
										Choose File
									</IonButton>
								</div>
								<IonButton
									onClick={() => {
										setUploadMode(false);
										setCollectionCode('');
									}}
									fill='clear'
									color='secondary'
									expand='full'
									size='small'
								>
									Go Back
								</IonButton>
							</>
						) : (
							<>
								<div className='select-label'>
									<div>What's your collection code </div>
									<IonButton
										onClick={() => {
											setHelpModalShown(true);
										}}
										fill='clear'
										size='small'
									>
										<IonIcon
											slot='icon-only'
											icon={helpCircleOutline}
										></IonIcon>
									</IonButton>
								</div>
								<IonSelect
									justify='space-between'
									className='select'
									placeholder='Choose one'
									labelPlacement='stacked'
									// label='Format DAYXX(X)'
									aria-label='Collection code'
									fill='outline'
									value={collectionCode}
									onIonChange={(e) => {
										setCollectionCode(e.detail.value);
										const nextCollection =
											getNextCollection(e.detail.value);
										if (nextCollection) {
											setNextCollection(nextCollection);
										} else {
											setShowAlert(true);
										}
									}}
								>
									{availableCodes.map((code) => {
										return (
											<IonSelectOption
												key={code.code}
												value={code.code}
											>
												{code.label}
											</IonSelectOption>
										);
									})}
								</IonSelect>
								<IonButton
									onClick={() => {
										setUploadMode(true);
										setCollectionCode('');
									}}
									fill='clear'
									color='secondary'
									size='small'
								>
									Can't find your code?
								</IonButton>
								{/* <IonButton onClick={pickFile}>Done!</IonButton> */}
							</>
						)}
					</div>
				</div>
				<div className='selected-code-container'>
					{!!collectionCode && !!nextCollection && (
						<>
							{dates && uploadMode && (
								<div style={{ marginBottom: 20 }}>
									File upload successful! <br />
									Your collection code is {collectionCode}
								</div>
							)}
							<IonButton
								fill='outline'
								color='primary'
								onClick={() => {
									props.next(collectionCode, nextCollection);
								}}
							>
								Let's Go!
							</IonButton>
						</>
					)}
				</div>
			</div>
			<IonAlert
				isOpen={showAlert}
				message='Something went wrong. Please try again!'
				onDidDismiss={() => setShowAlert(false)}
				buttons={['Okay']}
			/>
			<IonModal isOpen={helpModalShown}>
				<IonContent>
					<div className='help-modal'>
						<div className='help-text'>
							You can find the <strong>Collection Code</strong> on
							the first page of your Bin Collection Schedule
							booklet
						</div>
						<div>
							<div className='modal-image'>
								<img
									src={
										new URL(
											'../../assets/collection-code.png',
											import.meta.url
										).href
									}
								/>
							</div>
						</div>
						<IonButton
							onClick={() => {
								setHelpModalShown(false);
							}}
							fill='outline'
							color='primary'
							className='modal-button'
						>
							<IonIcon slot='start' icon={checkmark}></IonIcon>
							Got it
						</IonButton>
					</div>
				</IonContent>
			</IonModal>
		</>
	);
};
