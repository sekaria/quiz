import api from '../../utils/api'

const ActionType = {
	FETCH_QUESTIONS_REQUEST: 'FETCH_QUESTIONS_REQUEST',
	FETCH_QUESTIONS_SUCCESS: 'FETCH_QUESTIONS_SUCCESS',
	FETCH_QUESTIONS_FAILURE: 'FETCH_QUESTIONS_FAILURE',

	SET_TOTAL_QUESTIONS: 'SET_TOTAL_QUESTIONS',

	SET_CORRECT_ANSWER: 'SET_CORRECT_ANSWER',
	SET_INCORRECT_ANSWER: 'SET_INCORRECT_ANSWER',

	SELECT_ANSWER: 'SELECT_ANSWER',

	SET_CURRENT_QUESTION_INDEX: 'SET_CURRENT_QUESTION_INDEX',
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

function setCorrectAnswer(count) {
	return {
		type: ActionType.SET_CORRECT_ANSWER,
		payload: {
			count,
		},
	}
}

function setIncorrectAnswer(count) {
	return {
		type: ActionType.SET_INCORRECT_ANSWER,
		payload: {
			count,
		},
	}
}

function selectAnswer(answer) {
	return {
		type: ActionType.SELECT_ANSWER,
		payload: {
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
			const { questions, selectedAnswers } = state.questions

			let correctCount = 0
			let incorrectCount = 0

			questions.forEach((question, index) => {
				if (selectedAnswers[index] === question.correct_answer) {
					correctCount++
				} else {
					incorrectCount++
				}
			})

			dispatch(setCorrectAnswer(correctCount))
			dispatch(setIncorrectAnswer(incorrectCount))
		} catch (e) {
			dispatch(fetchQuestionsFailure('Error while checking answered.'))
		}
	}
}

export { ActionType, getQuestions, totalQuestions, selectAnswer, checkAnswer, setCurrentQuestionIndex }
