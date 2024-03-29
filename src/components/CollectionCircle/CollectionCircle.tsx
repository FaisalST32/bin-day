import { useMemo } from 'react';
import { CollectionType } from '../../types/collection.types';
import { BinIcon } from '../Bin/Bin';
import './CollectionCircle.less';
import { binColorMap } from '../../data.ts/collection.data';

export type CollectionCircleProps = {
	collection: CollectionType;
};

export const CollectionCircle: React.FC<CollectionCircleProps> = (
	props: CollectionCircleProps
) => {
	const border = useMemo(() => {
		if (props.collection.color.length === 1) {
			return binColorMap[
				props.collection.color[0].split(' ')[0].toLowerCase()
			];
		} else {
			return `${
				binColorMap[
					props.collection.color[1].split(' ')[0].toLowerCase()
				]
			} ${
				binColorMap[
					props.collection.color[1].split(' ')[0].toLowerCase()
				]
			} ${
				binColorMap[
					props.collection.color[0].split(' ')[0].toLowerCase()
				]
			} ${
				binColorMap[
					props.collection.color[0].split(' ')[0].toLowerCase()
				]
			}`;
		}
	}, [props.collection]);

	return (
		<div className='collection-circle-root'>
			<div className='circle' style={{ borderColor: border }}>
				<div className='circle-inner'>
					<div className='bins'>
						{props.collection.color.map((bin) => {
							const binColor = bin.split(' ')[0].toLowerCase();
							return (
								<div className='bin' key={binColor}>
									<BinIcon
										color={binColorMap[binColor]}
										height={40}
									/>
								</div>
							);
						})}
					</div>
					<div className='date'>{props.collection.dateStr}</div>
				</div>
			</div>
		</div>
	);
};
