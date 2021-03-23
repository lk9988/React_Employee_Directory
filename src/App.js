import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Wrapper from "./components/Wapper";
import API from "./utils/API";
function App() {
	const [employeeState, setEmployeeState] = useState([]);
	const [originalState, setOriginalState] = useState([]);
	const [searchState, setSearchState] = useState("");

	useEffect(() => {
		API.getUsers().then((employees) => {
			setEmployeeState(employees.data.results);

			setOriginalState(employees.data.results);
		});
	}, []);

	const handleInputChange = (event) => {
		const { value } = event.target;
		setSearchState(value);
		console.log(value);
		const newEmployeeArray = originalState.filter((employee) => {
			return (
				employee.name.first.toLowerCase().includes(value.toLowerCase()) ||
				employee.name.last.toLowerCase().includes(value.toLowerCase())
			);
		});
		setEmployeeState(newEmployeeArray);
	};

	return (
		<div>
			<Wrapper>
				<Header />
				<Main
					users={employeeState}
					searchState={searchState}
					handleInputChange={handleInputChange}
				/>
			</Wrapper>
		</div>
	);
}

export default App;
