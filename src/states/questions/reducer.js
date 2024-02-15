import { ActionType } from './action'

const initialState = {
	questions: [],
	totalQuestions: 0,
	totalAnswered: 0,
	selectedAnswers: [],
	correctAnswers: 0,
	wrongAnswers: 0,
	loading: false,
	error: null,
	currentQuestionIndex: 0,
}

const questionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.FETCH_QUESTIONS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			}
		case ActionType.FETCH_QUESTIONS_SUCCESS:
			return {
				...state,
				loading: false,
				questions: action.payload.questions,
				totalQuestions: action.payload.totalQuestions,
			}
		case ActionType.FETCH_QUESTIONS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			}
		case ActionType.SET_TOTAL_QUESTIONS:
			return {
				...state,
				totalQuestions: action.payload.total,
			}
		case ActionType.SET_CORRECT_ANSWER:
			return {
				...state,
				correctAnswers: action.payload.count,
			}
		case ActionType.SET_INCORRECT_ANSWER:
			return {
				...state,
				wrongAnswers: action.payload.count,
			}
		case ActionType.SELECT_ANSWER:
			return {
				...state,
				totalAnswered: state.totalAnswered + 1,
				selectedAnswers: [...state.selectedAnswers, action.payload.answer],
			}
		case ActionType.SET_CURRENT_QUESTION_INDEX:
			return {
				...state,
				currentQuestionIndex: action.payload.index,
			}
		default:
			return state
	}
}

export default questionsReducer