import React from 'react'
import PropTypes from 'prop-types'

function Question({ question, handleAnswer }) {
	const handleOptionChange = (option) => {
		let selectedAnswers = []
		selectedAnswers.push(option)
		handleAnswer(selectedAnswers)
	}

	return (
		<div className="bg-white rounded-lg shadow-lg p-4">
			<h2 className="text-xl font-semibold mb-4">{question}</h2>
			<div className="space-x-4">
				<label className="block">
					<input type="radio" name="answer" value="true" onChange={() => handleOptionChange('True')} className="mr-2" />
					True
				</label>
				<label className="block">
					<input type="radio" name="answer" value="false" onChange={() => handleOptionChange('False')} className="mr-2" />
					False
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
