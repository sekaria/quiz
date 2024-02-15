import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ResultPage() {
	const { correctAnswers, wrongAnswers, totalAnswered } = useSelector((state) => state.questions)
	return (
		<div>
			<p>Correct answered: {correctAnswers}</p>
			<p>Wrong answered: {wrongAnswers}</p>
			<p>Total answered: {totalAnswered}</p>
			<Link to="/">Back to homepage</Link>
		</div>
	)
}

export default ResultPage
