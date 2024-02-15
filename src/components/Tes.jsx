// Tes.js

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getQuestions } from '../states/questions/action'

function Tes() {
	const dispatch = useDispatch()
	const { questions, loading, error } = useSelector((state) => state.questions)

	useEffect(() => {
		dispatch(getQuestions())
	}, [dispatch])

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>Error: {error.error}</p>
			) : (
				<div>
					<h1>Questions</h1>
					<ul>
						{questions.map((question, index) => (
							<li key={index}>{question.question}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Tes
