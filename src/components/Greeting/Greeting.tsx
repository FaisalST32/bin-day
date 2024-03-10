import { IonButton } from '@ionic/react';
import './Greeting.less';

export type GreetingSlideProps = {
	next: () => void;
};

export const GreetingSlide: React.FC<GreetingSlideProps> = (
	props: GreetingSlideProps
) => {
	return (
		<div className='slide-1'>
			<div className='logo-container'>
				<img
					src={
						new URL('../../assets/Bin_Day.png', import.meta.url)
							.href
					}
				/>
			</div>
			<div className='image-container'>
				<img
					src={new URL('../../assets/bin.jpg', import.meta.url).href}
				/>
			</div>
			<div className='slide-text'>
				<div>
					Welcome to <strong>Bindicator</strong>!
				</div>
				<br />
				<div>
					The answer to the question,{' '}
					<em>"Is it bin day today, honey?"</em>
				</div>
				<div className='button'>
					<IonButton
						onClick={() => {
							props.next();
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
	);
};
