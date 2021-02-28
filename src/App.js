import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Wrapper from "./components/Wapper";

function App() {
	return (
		<div>
			<Wrapper>
				<Header />
				<Main />
			</Wrapper>
		</div>
	);
}

export default App;
