import React, { useState } from 'react';
import {
	Cal,
	Day,
	Room,
	Label
} from './Calendar.styles';

const Calendar = () => {
	const roomsArray = [
		227,
		228,
		229,
		230,
		231,
		232,
		233,
		234,
		235,
		236,
		237,
		238,
		239,
		242,
		243,
		244,
		245,
		246,
		247,
		248,
		249,
		250,
		251,
		252,
		253
	];
	let uncheckedRooms = [...roomsArray];
	const [numOfDays, setNumOfDays] = useState(null);
	const numOfDaysArray = Array.from(Array(numOfDays).keys());
	const [numOfChecks, setNumOfChecks] = useState(null);
	const [isDisabled, changeIsDisabled] = useState(false);
	const randomNumber = (num) => Math.floor(Math.random() * num);

	const RoomCheck = (dailyChecks) => {
		if (!dailyChecks.length) {
			for (let i = 0; i < numOfChecks; i++) {
				const rand = randomNumber(uncheckedRooms.length)
				const removedNum = uncheckedRooms.splice(rand, 1)[0];
				dailyChecks.push(removedNum);
			}
		} else {
			for (let i = 0; i < numOfChecks; i++) {
				const rand = randomNumber(uncheckedRooms.length)
				const removedNum = uncheckedRooms.splice(rand, 1)[0];
				dailyChecks.push(removedNum);
				if (dailyChecks.length === numOfChecks) return;
			}
		}
	};

	const RoomCalculator = (i) => {
		console.log('Day', i + 1)
		const dailyChecks = [];
		if (uncheckedRooms.length <= numOfChecks) {
			for (let i = 0; i < numOfChecks; i++) {
				if (uncheckedRooms.length) dailyChecks.push(uncheckedRooms.pop());
			};
			if (dailyChecks.length < numOfChecks) {
				uncheckedRooms = [...roomsArray];
				RoomCheck(dailyChecks);
			}
		} else {
			RoomCheck(dailyChecks);
		}
		return dailyChecks;
	};

	const handleChecksOnChange = (e) => {
		e.preventDefault();
		const input = Number(e.target.value)
		if (!input && e.target.value !== '') {
			alert('value must be a number')
			e.target.value = '';
		}
		setNumOfChecks(input)
		for (let i = input; i < 100; i++) { 
			if (i % input === 0 && (i > uncheckedRooms.length || i * input === uncheckedRooms.length)) {
				setNumOfDays(i);
				changeIsDisabled(!isDisabled);
				return;
			}
		}
	};

	return (
		<>
			<h1>Room Check Planner</h1>
			<Label htmlFor="numOfChecks">How many rooms per day would you like to schedule?</Label>
			<input id="numOfChecks" onChange={(e)=> handleChecksOnChange(e)} placeholder="3" disabled={isDisabled}></input>
			<Cal>
				{numOfChecks && numOfDays &&
				numOfDaysArray.map((day, i) => {
					return (
					<Day key={`Day ${i}`}>
						<h3>Day {i + 1}</h3>
							{RoomCalculator(i).map((room, j) => <Room key={`Day ${i} Room ${j}`}>Room {room}</Room>)}
					</Day>
				)})}
			</Cal>
		</>
		);
};

export default Calendar;
