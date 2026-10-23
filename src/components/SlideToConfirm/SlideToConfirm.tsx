import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { useRef, useState } from 'react';
import { ArrowRight, CheckIcon } from '../Icons';
import './SlideToConfirm.css';

type Props = {
	label: string;
	color: string;
	onConfirm: () => void;
};

const KNOB = 54;
const PAD = 6;

export const SlideToConfirm = ({ label, color, onConfirm }: Props) => {
	const track = useRef<HTMLDivElement>(null);
	const start = useRef(0);
	const [offset, setOffset] = useState(0);
	const [dragging, setDragging] = useState(false);
	const [done, setDone] = useState(false);

	const max = () => (track.current?.clientWidth ?? 300) - KNOB - PAD * 2;

	const onDown = (e: React.PointerEvent) => {
		if (done) return;
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {
			// Synthetic pointers can't be captured; dragging still works without it.
		}
		start.current = e.clientX - offset;
		setDragging(true);
	};

	const onMove = (e: React.PointerEvent) => {
		if (!dragging) return;
		setOffset(Math.max(0, Math.min(max(), e.clientX - start.current)));
	};

	const onUp = () => {
		if (!dragging) return;
		setDragging(false);
		if (offset > max() * 0.85) {
			setOffset(max());
			setDone(true);
			Haptics.impact({ style: ImpactStyle.Medium }).catch(() => undefined);
			setTimeout(onConfirm, 350);
		} else {
			setOffset(0);
		}
	};

	return (
		<div className='slide-confirm' ref={track}>
			<div className='slide-fill' style={{ width: offset + KNOB + PAD, background: color }} />
			<div className='slide-label' style={{ opacity: 1 - offset / (max() || 1) }}>
				{label}
			</div>
			<button
				type='button'
				className='slide-knob'
				aria-label={label}
				style={{
					transform: `translateX(${offset}px)`,
					transition: dragging ? 'none' : 'transform .25s ease',
					background: color,
					boxShadow: `0 0 24px ${color}b3`,
				}}
				onPointerDown={onDown}
				onPointerMove={onMove}
				onPointerUp={onUp}
				onPointerCancel={onUp}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						setDone(true);
						onConfirm();
					}
				}}
			>
				{done ? <CheckIcon /> : <ArrowRight />}
			</button>
		</div>
	);
};
