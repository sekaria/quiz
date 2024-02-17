import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Question from '../components/Questions/Question'
import { getQuestions, selectAnswer, setCurrentQuestionIndex, checkAnswer, startTimerAction, resetState } from '../states/questions/action'
import ResultPage from './ResultPage'
import Loading from '../components/Loading'

function QuestionPage() {
	const dispatch = useDispatch()
	const { questions, loading, currentQuestionIndex, totalAnswered, elapsedTime, timeUp } = useSelector((state) => state.questions)
	const authUser = useSelector((state) => state.authUser)
	const [formattedTime, setFormattedTime] = useState('00:00')

	useEffect(() => {
		dispatch(getQuestions())
		dispatch(startTimerAction(10))
	}, [dispatch])

	useEffect(() => {
		const minutes = Math.floor(elapsedTime / 60)
		const seconds = elapsedTime % 60
		setFormattedTime(`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
	}, [elapsedTime])

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
				<Loading />
			) : (
				<div className="max-w-[1640px] mx-auto p-4">
					{totalAnswered !== questions.length && (
						<div className="flex flex-row justify-between items-center mb-4">
							<p className="text-lg">
								Total Answered: {totalAnswered} / {questions.length}
							</p>
							<p className="text-lg">{formattedTime}</p>
						</div>
					)}
					<div className="flex items-center justify-center">
						{questions.length > 0 && currentQuestionIndex < questions.length && (
							<div key={currentQuestionIndex}>
								<Question question={questions[currentQuestionIndex].question} handleAnswer={check} />
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default QuestionPage
