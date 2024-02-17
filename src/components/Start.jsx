import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function Start({ totalQuestions }) {
	const navigate = useNavigate()

	const onStart = () => {
		navigate('/question')
	}
	return (
		<div className="flex flex-col items-center justify-center mt-2">
			<h1 className="text-3xl font-bold mb-2 text-center">Ready to start answering the questions?</h1>
			<p className="mb-2">Total questions: {totalQuestions}</p>
			<p className="mb-2">Total time: 10 seconds</p>
			<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none" onClick={onStart}>
				Start
			</button>
		</div>
	)
}

Start.propTypes = {
	totalQuestions: PropTypes.number.isRequired,
}

export default Start
