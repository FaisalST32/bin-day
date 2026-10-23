import { formatTime } from '../lib/dates';

/** A pill showing "8:00 pm" that opens the platform's native time picker. */
export const TimeField = ({ value, onChange, disabled }: { value: string; onChange: (v: string) => void; disabled?: boolean }) => (
	<label className='pill time-field' style={{ position: 'relative', opacity: disabled ? 0.5 : 1 }}>
		{formatTime(value)}
		<input
			type='time'
			value={value}
			disabled={disabled}
			aria-label='Time'
			onChange={(e) => e.target.value && onChange(e.target.value)}
			style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', height: '100%' }}
		/>
	</label>
);
