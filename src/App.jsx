import { useState } from "react";
import { FaUndo, FaRedo } from "react-icons/fa";

function App() {
	const [dots, setDots] = useState([]);
	const [removedDots, setRemovedDots] = useState([]);

	const genHexColor = () => {
		const hexadecimalCharacters = [
			'A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
		]

		let hexadecimal = '';
		const hexaDecimalLengh = 8;
		for (let i = 0; i < hexaDecimalLengh; i++) {
			let characterIndex = Math.floor(Math.random() * hexadecimalCharacters.length);
			hexadecimal += hexadecimalCharacters[characterIndex];
		}
		return '#' + hexadecimal;
	}

	const handlerClickArea = (e) => {
		const date = new Date();
		const key = date.getMilliseconds() * date.getSeconds();
		const newDot = (
			<span
				key={key}
				style={{
					top: `${e.clientY}px`,
					left: `${e.clientX}px`,
					backgroundColor: `${genHexColor()}`
				}}
				className="dot">
			</span>
		)

		setDots([...dots, newDot]);
	}

	const handlerClickUndo = (e) => {
		if (dots.length <= 0) return;
		const dotsClone = [...dots];
		const undoDot = dotsClone.pop();
		setRemovedDots([...removedDots, undoDot]);
		setDots(dotsClone);
	}

	const handlerClickRedo = (e) => {
		if (removedDots.length <= 0) return;
		const removedDotsClone = [...removedDots];
		const redoDot = removedDotsClone.pop();
		setRemovedDots(removedDotsClone);
		setDots([...dots, redoDot]);
	}

	return (
		<div className="app">
			<div className="containerButtons">
				<button
					className="undo"
					onClick={handlerClickUndo}>
					{<FaUndo />}
				</button>
				<button
					className="redo"
					onClick={handlerClickRedo}>
					{<FaRedo />}
				</button>
			</div>
			<div className="area" onClick={handlerClickArea}>
				{dots}
			</div>
		</div>
	)
}

export default App;
