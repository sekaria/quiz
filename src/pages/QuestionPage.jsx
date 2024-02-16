import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Question from '../components/Questions/Question'
import { getQuestions, selectAnswer, setCurrentQuestionIndex, checkAnswer, startTimerAction, resetState } from '../states/questions/action'
import ResultPage from './ResultPage'

function QuestionPage() {
	const dispatch = useDispatch()
	const { questions, loading, currentQuestionIndex, totalAnswered, elapsedTime, timeUp } = useSelector((state) => state.questions)

	useEffect(() => {
		dispatch(getQuestions())
		dispatch(startTimerAction(10))
	}, [dispatch])

	const handleAnswer = (answer) => {
		dispatch(selectAnswer(answer))
		dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))
	}

	useEffect(() => {
		if (totalAnswered === questions.length) {
			dispatch(checkAnswer())
		}
	}, [totalAnswered, questions.length, dispatch])

	const doReset = () => {
		dispatch(resetState())
		dispatch(getQuestions())
		dispatch(startTimerAction(10))
	}

	if (questions.length !== 0) {
		if (timeUp || questions.length === totalAnswered) {
			return <ResultPage reset={doReset} />
		}
	}

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					{totalAnswered !== questions.length && (
						<div className="flex flex-row">
							<p>{totalAnswered}</p>
							<span>/</span>
							<p>{questions.length}</p>
							<p>Time: {elapsedTime} seconds</p>
						</div>
					)}
					<div>
						{questions.length > 0 && currentQuestionIndex < questions.length && (
							<div key={currentQuestionIndex}>
								<Question question={questions[currentQuestionIndex].question} handleAnswer={handleAnswer} />
							</div>
						)}
					</div>
				</>
			)}
		</div>
	)
}

export default QuestionPage
