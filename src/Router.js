import React from "react";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import New from './components/New';
import Articles from './components/Articles';

function Router() {
	return(
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route exact path='/' element={<New />} />
					<Route exact path='/articles' element={<Articles />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default Router;