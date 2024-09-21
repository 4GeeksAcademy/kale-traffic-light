import React, { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [luces, setLuces] = useState(null)

	return (
		<div>
			<div className="top"></div>
			<div className="semaforo">
				<div
					className={`light red ${luces === 'red' ? 'active' : ''}`}
					onClick={() => setLuces('red')}
				></div>
				<div
					className={`light yellow ${luces === 'yellow' ? 'active' : ''}`}
					onClick={() => setLuces('yellow')}
				></div>
				<div
					className={`light green ${luces === 'green' ? 'active' : ''}`}
					onClick={() => setLuces('green')}
				></div>

			</div>
		</div>
	);
};

export default Home;
