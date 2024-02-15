import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function Start({ totalQuestions, totalTime }) {
	const navigate = useNavigate()

	const onStart = () => {
		navigate('/question')
	}
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-3xl font-bold mb-4">Ready to start answering the questions?</h1>
			<p className="mb-2">Total questions: {totalQuestions}</p>
			<p className="mb-2">Total time: {totalTime} minutes</p>
			<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={onStart}>
				Start
			</button>
		</div>
	)
}

Start.propTypes = {
	totalQuestions: PropTypes.number.isRequired,
	totalTime: PropTypes.number.isRequired,
}

export default Start
