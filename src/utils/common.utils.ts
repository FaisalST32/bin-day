export const getTimeOfDay = () => {
	const today = new Date();
	const curHr = today.getHours();

	if (curHr < 12) {
		return 'Morning';
	} else if (curHr < 18) {
		return 'Afternoon';
	} else {
		return 'Evening';
	}
};
