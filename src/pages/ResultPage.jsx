import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ResultPage({ reset }) {
	const { correctAnswers, wrongAnswers, totalAnswered } = useSelector((state) => state.questions)
	return (
		<div>
			<p>Correct answered: {correctAnswers}</p>
			<p>Wrong answered: {wrongAnswers}</p>
			<p>Total answered: {totalAnswered}</p>
			<Link to="/">Back to homepage</Link>
			<button onClick={reset}>Take quiz again</button>
		</div>
	)
}

ResultPage.propTypes = {
	reset: PropTypes.func.isRequired,
}

export default ResultPage
