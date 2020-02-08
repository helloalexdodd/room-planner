import React, { useState } from 'react';
import styled from 'styled-components';
import { RoomCalculator, RoomCheck } from '../../utils/RoomCalculator'

const Cal = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
	
const Day = styled.div`
	width: calc(14% - 100px);
	margin: 50px; 
`;

const Room = styled.p`
	font-weight: bold;
`;

const Calendar = () => {
	const numOfRooms = 25;
	const numOfRoomsArray = Array.from(Array(numOfRooms + 1).keys());
	const numOfDays = 7;
	const numOfDaysArray = Array.from(Array(numOfDays).keys());
	const [uncheckedRooms, updateRooms] = useState(numOfRoomsArray);

	const RoomCalculator = (i) => {
		if (uncheckedRooms.length <= 3 || numOfDays === i + 1) {
			const allRooms = uncheckedRooms.splice(1, 25);
			uncheckedRooms.pop();
			// updateRooms(numOfRoomsArray);
			return allRooms
		}
		const randomNumber = (num) => Math.floor(Math.random() * num + 1);
		const numOfChecks = randomNumber(6);
		return uncheckedRooms.reduce((acc, _, i) => {
			if (i < numOfChecks) {
				const removedNum = uncheckedRooms.splice(randomNumber(uncheckedRooms.length - 1), 1)[0];
				if (removedNum) acc.push(removedNum);
			}
			return acc
		}, []);
	};

	return (
		<Cal>
			{numOfDaysArray.map((day, i) => {
				return (
				<Day key={`Day ${i}`}>
					<h3>{i + 1}</h3>
						{RoomCalculator(i).map((room, j) => (
						<Room key={`Day ${i} Room ${j}`}>Room {room}</Room>
						))}
				</Day>
			)})}
		</Cal>
		);
};

export default Calendar;
