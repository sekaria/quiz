import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { VscDebugRestart } from 'react-icons/vsc'

function ResultPage({ reset }) {
	const authUser = useSelector((state) => state.authUser)
	const { totalAnswered } = useSelector((state) => state.questions)
	const { correctAnswers, wrongAnswers } = useSelector((state) => state.questions.userAnswers[authUser.id] || {})

	return (
		<div className="max-w-[1640px] mx-auto p-4 ">
			<div className="flex flex-col items-center justify-center">
				<h2 className="text-3xl font-bold mb-4 text-center">Quiz Results</h2>
				<div className="mb-4">
					<p className="text-lg">Correctly Answered: {correctAnswers}</p>
					<p className="text-lg">Incorrectly Answered: {wrongAnswers}</p>
					<p className="text-lg">Total Answered: {totalAnswered} </p>
				</div>
				<button onClick={reset} className="flex items-center outline outline-1 outline-blue-500 bg-blue-500 text-white py-2 px-4 rounded hover:bg-white hover:text-blue-500 hover:border-blue-500 mt-5">
					<VscDebugRestart className="mr-2" /> Again
				</button>
			</div>
		</div>
	)
}

ResultPage.propTypes = {
	reset: PropTypes.func.isRequired,
}

export default ResultPage
