import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Question from '../components/Questions/Question'
import { getQuestions, selectAnswer, setCurrentQuestionIndex, checkAnswer, startTimerAction, resetState } from '../states/questions/action'
import ResultPage from './ResultPage'

function QuestionPage() {
	const dispatch = useDispatch()
	const { questions, loading, currentQuestionIndex, totalAnswered, elapsedTime, timeUp } = useSelector((state) => state.questions)
	const authUser = useSelector((state) => state.authUser)

	useEffect(() => {
		dispatch(getQuestions())
		dispatch(startTimerAction(10))
	}, [dispatch])

	const check = (answer) => {
		console.log(answer)
		if (Array.isArray(answer)) {
			dispatch(selectAnswer({ userId: authUser.id, answer: answer }))
			dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1))
		}
	}

	useEffect(() => {
		if (timeUp || totalAnswered === questions.length) {
			dispatch(checkAnswer())
		}
	}, [totalAnswered, questions.length, timeUp, dispatch])

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
								<Question question={questions[currentQuestionIndex].question} handleAnswer={check} />
							</div>
						)}
					</div>
				</>
			)}
		</div>
	)
}

export default QuestionPage
