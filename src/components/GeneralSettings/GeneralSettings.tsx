import { useCallback, useMemo } from 'react';
import { GeneralSettingsType } from '../../pages/Settings';
import './GeneralSettings.less';
import { IonInput, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import { getCollectionCodes } from '../../services/data.service';

export type GeneralSettingsProps = {
	onChange: (reminderSettings: GeneralSettingsType) => void;
	settings: GeneralSettingsType | undefined;
};

export const GeneralSettings: React.FC<GeneralSettingsProps> = (
	props: GeneralSettingsProps
) => {
	const onChangeName = useCallback(
		(name: string) => {
			props.onChange({
				...(props?.settings ?? {}),
				name,
			} as GeneralSettingsType);
		},
		[props.settings]
	);

	const onChangeCollectionCode = useCallback(
		(code: string) => {
			props.onChange({
				...(props?.settings ?? {}),
				collectionCode: code,
			} as GeneralSettingsType);
		},
		[props.settings]
	);

	const availableCodes = useMemo(() => {
		return getCollectionCodes();
	}, []);

	return (
		<div className='general-settings-input'>
			<IonInput
				type='text'
				label='your name'
				value={props.settings?.name}
				fill='outline'
				placeholder='e.g. John'
				onIonInput={(e) => {
					onChangeName(e.target?.value?.toString() ?? '');
				}}
				className='input'
			></IonInput>
			<div>
				<IonSelect
					justify='space-between'
					className='select'
					placeholder='Choose one'
					label='collection code'
					aria-label='Collection code'
					fill='outline'
					value={props.settings?.collectionCode}
					onIonChange={(e) => {
						onChangeCollectionCode(e.detail.value);
					}}
				>
					{availableCodes.map((code) => {
						return (
							<IonSelectOption key={code.code} value={code.code}>
								{code.label}
							</IonSelectOption>
						);
					})}
				</IonSelect>
			</div>
		</div>
	);
};
