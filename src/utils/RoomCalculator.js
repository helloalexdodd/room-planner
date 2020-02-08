export const RoomCalculator = (uncheckedRooms, numOfRooms, numOfDays) => {
	const randomNumber = (num) => Math.floor(Math.random() * num + 1);
	const numOfChecks = randomNumber(numOfRooms / numOfDays);
	const allChecks = uncheckedRooms.reduce((acc, cur, i, arr) => {
		if (i < numOfChecks) {
			const removedNum = uncheckedRooms.splice(randomNumber(uncheckedRooms.length - 1), 1)[0];
			if (removedNum) acc.push(removedNum);
		}
		return acc
	}, []);
	return allChecks
};
