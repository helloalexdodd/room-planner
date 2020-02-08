import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RoomCalculator } from '../../utils/RoomCalculator'

const Week = styled.div`
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
	const numOfRoomsArray = () => Array.from(Array(numOfRooms).keys());
	const numOfDays = 14;
	const numOfDaysArray = Array.from(Array(numOfDays).keys());
	const [uncheckedRooms, updateRooms] = useState(numOfRoomsArray());

	const roomCheck = () => {
		if (uncheckedRooms <= 3) updateRooms(numOfRoomsArray());
	}
	
	return (
		<Week>
			{numOfDaysArray.map((day, i) => {
				roomCheck();
				return (
				<Day key={`Day ${i}`}>
					<h3>{i + 1}</h3>
					{RoomCalculator(uncheckedRooms, numOfRooms, numOfDays).map((room) => (
						<Room>Room {room}</Room>
					))}
				</Day>
			)})}
		</Week>
		);
};

export default Calendar;
