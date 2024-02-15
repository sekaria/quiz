import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { asyncPreloadProcess } from './states/isPreload/action.js'
import { asyncUnsetAuthUser } from './states/authUser/action.js'

import LoginPage from './pages/LoginPage.jsx'
// import Loading from './components/Loading'
import Navigation from './components/Navigation/Navigation.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import HomePage from './pages/HomePage.jsx'
// import Tes from './components/Tes.jsx'
import QuestionPage from './pages/QuestionPage.jsx'

function App() {
	const authUser = useSelector((state) => state.authUser)
	const isPreload = useSelector((state) => state.isPreload)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(asyncPreloadProcess())
	}, [dispatch])
	const onSignOut = () => {
		dispatch(asyncUnsetAuthUser())
	}
	if (isPreload) {
		return null
	}
	if (authUser === null) {
		return (
			<>
				{/* <Loading /> */}
				<Routes>
					<Route path="/*" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Routes>
			</>
		)
	}
	return (
		<>
			{/* <Loading /> */}
			<div className="app-container">
				<Navigation authUser={authUser} signOut={onSignOut} />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/question" element={<QuestionPage />} />
					<Route path="/*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</>
	)
}

export default App
