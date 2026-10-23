type IconProps = { size?: number };

const Svg = ({ size = 22, children }: IconProps & { children: React.ReactNode }) => (
	<svg className='ic' viewBox='0 0 24 24' style={{ width: size, height: size }} aria-hidden>
		{children}
	</svg>
);

export const HomeIcon = (p: IconProps) => (
	<Svg {...p}>
		<path d='M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z' />
	</Svg>
);

export const CalendarIcon = (p: IconProps) => (
	<Svg {...p}>
		<rect x='3' y='5' width='18' height='16' rx='3' />
		<path d='M3 10h18M8 3v4M16 3v4' />
	</Svg>
);

export const SettingsIcon = (p: IconProps) => (
	<Svg {...p}>
		<circle cx='12' cy='12' r='3' />
		<path d='M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1' />
	</Svg>
);

export const BellIcon = (p: IconProps) => (
	<Svg {...p}>
		<path d='M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8' />
		<path d='M10 20a2 2 0 0 0 4 0' />
	</Svg>
);

export const ChevronRight = (p: IconProps) => (
	<Svg {...p}>
		<path d='M9 6l6 6-6 6' />
	</Svg>
);

export const ChevronLeft = (p: IconProps) => (
	<Svg {...p}>
		<path d='M15 6l-6 6 6 6' />
	</Svg>
);

export const ArrowRight = (p: IconProps) => (
	<Svg {...p}>
		<path d='M5 12h14M13 6l6 6-6 6' />
	</Svg>
);

export const CheckIcon = (p: IconProps) => (
	<Svg {...p}>
		<path d='M5 12l5 5 9-10' />
	</Svg>
);

export const UserIcon = (p: IconProps) => (
	<Svg {...p}>
		<circle cx='12' cy='8' r='4' />
		<path d='M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6' />
	</Svg>
);
