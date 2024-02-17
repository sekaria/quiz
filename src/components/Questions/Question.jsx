import React from 'react'
import PropTypes from 'prop-types'

function Question({ question, handleAnswer }) {
	const handleOptionChange = (option) => {
		let selectedAnswers = []
		selectedAnswers.push(option)
		handleAnswer(selectedAnswers)
	}

	return (
		<div className="flex flex-col items-center">
			<h2 className="text-xl font-bold w-3/4 text-center">{question}</h2>
			<div className="flex flex-row items-center justify-center space-x-4 mt-14">
				<label>
					<input type="radio" name="answer" value="true" onChange={() => handleOptionChange('True')} className="hidden" />
					<span className="outline outline-1 rounded-lg py-10 px-14 hover:bg-blue-500 hover:text-white hover:outline-white">True</span>
				</label>
				<label>
					<input type="radio" name="answer" value="false" onChange={() => handleOptionChange('False')} className="hidden" />
					<span className="outline outline-1 rounded-lg py-10 px-14 hover:bg-blue-500 hover:text-white hover:outline-white">False</span>
				</label>
			</div>
		</div>
	)
}

Question.propTypes = {
	question: PropTypes.string.isRequired,
	handleAnswer: PropTypes.func.isRequired,
}

export default Question
