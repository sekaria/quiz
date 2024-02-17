import api from '../../utils/api'

const ActionType = {
	FETCH_QUESTIONS_REQUEST: 'FETCH_QUESTIONS_REQUEST',
	FETCH_QUESTIONS_SUCCESS: 'FETCH_QUESTIONS_SUCCESS',
	FETCH_QUESTIONS_FAILURE: 'FETCH_QUESTIONS_FAILURE',

	SET_TOTAL_QUESTIONS: 'SET_TOTAL_QUESTIONS',

	SET_CORRECT_ANSWER: 'SET_CORRECT_ANSWER',
	SET_INCORRECT_ANSWER: 'SET_INCORRECT_ANSWER',
	SET_TOTAL_ANSWERED: 'SET_TOTAL_ANSWERED',

	SELECT_ANSWER: 'SELECT_ANSWER',

	SET_CURRENT_QUESTION_INDEX: 'SET_CURRENT_QUESTION_INDEX',

	START_TIMER: 'START_TIMER',
	TIME_UP: 'TIME_UP',
	UPDATE_TIMER: 'UPDATE_TIMER',

	RESET: 'RESET',
}

function fetchQuestionsRequest() {
	return {
		type: ActionType.FETCH_QUESTIONS_REQUEST,
	}
}

function fetchQuestionsSuccess(questions) {
	return {
		type: ActionType.FETCH_QUESTIONS_SUCCESS,
		payload: {
			questions,
		},
	}
}

function fetchQuestionsFailure(error) {
	return {
		type: ActionType.FETCH_QUESTIONS_FAILURE,
		payload: {
			error,
		},
	}
}

function setTotalQuestions(total) {
	return {
		type: ActionType.SET_TOTAL_QUESTIONS,
		payload: {
			total,
		},
	}
}

function setCorrectAnswer({ userId, count }) {
	return {
		type: ActionType.SET_CORRECT_ANSWER,
		payload: {
			userId,
			count,
		},
	}
}

function setIncorrectAnswer({ userId, count }) {
	return {
		type: ActionType.SET_INCORRECT_ANSWER,
		payload: {
			userId,
			count,
		},
	}
}

function setTotalAnswered({ userId, count }) {
	return {
		type: ActionType.SET_TOTAL_ANSWERED,
		payload: {
			userId,
			count,
		},
	}
}

function selectAnswer({ userId, answer }) {
	return {
		type: ActionType.SELECT_ANSWER,
		payload: {
			userId,
			answer,
		},
	}
}

function setCurrentQuestionIndex(index) {
	return {
		type: ActionType.SET_CURRENT_QUESTION_INDEX,
		payload: {
			index,
		},
	}
}

function startTimer(startTime) {
	return {
		type: ActionType.START_TIMER,
		payload: {
			startTime,
		},
	}
}

function timeUp() {
	return {
		type: ActionType.TIME_UP,
	}
}

function updateTimer(elapsedTime) {
	return {
		type: ActionType.UPDATE_TIMER,
		payload: {
			elapsedTime,
		},
	}
}

function resetState() {
	return {
		type: ActionType.RESET,
	}
}

function startTimerAction(duration) {
	return (dispatch) => {
		const startTime = Date.now()

		dispatch(startTimer(startTime))

		const interval = setInterval(() => {
			const remainingTime = duration--

			if (remainingTime < 0) {
				clearInterval(interval)
				dispatch(timeUp())
			} else {
				dispatch(updateTimer(remainingTime))
			}
		}, 1000)
	}
}

function getQuestions() {
	return async (dispatch) => {
		dispatch(fetchQuestionsRequest())
		try {
			let result = await api.fetchQuestions()
			dispatch(fetchQuestionsSuccess(result))
		} catch (e) {
			dispatch(fetchQuestionsFailure('Error while fetching data.'))
		}
	}
}

function totalQuestions() {
	return async (dispatch) => {
		try {
			const result = await api.fetchQuestions()
			const total = result.length
			dispatch(setTotalQuestions(total))
			return total
		} catch (error) {
			throw new Error('Failed to fetch total questions')
		}
	}
}

function checkAnswer() {
	return async (dispatch, getState) => {
		try {
			const state = getState()
			const { authUser } = state
			const { questions, selectedAnswers } = state.questions

			let correctCount = 0
			let incorrectCount = 0
			let totalAnswered = 0

			if (selectedAnswers[authUser.id]) {
				totalAnswered = Object.keys(selectedAnswers[authUser.id]).length
			}

			questions.forEach((question, index) => {
				console.log(selectedAnswers[authUser.id][index])
				console.log(question.correct_answer)
				if (selectedAnswers[authUser.id][index] == question.correct_answer) {
					correctCount++
				} else {
					incorrectCount++
				}
			})

			dispatch(setCorrectAnswer({ userId: authUser.id, count: correctCount }))
			dispatch(setIncorrectAnswer({ userId: authUser.id, count: incorrectCount }))
			dispatch(setTotalAnswered({ userId: authUser.id, count: totalAnswered }))
		} catch (e) {
			dispatch(fetchQuestionsFailure('Error while checking answered.'))
		}
	}
}

export { ActionType, getQuestions, totalQuestions, selectAnswer, checkAnswer, setCurrentQuestionIndex, startTimerAction, resetState, setTotalAnswered }
