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
	timerStarted: false,
	startTime: null,
	elapsedTime: 0,
	timeUp: false,
	userAnswers: [],
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
				userAnswers: {
					...state.userAnswers,
					[action.payload.userId]: {
						...state.userAnswers[action.payload.userId],
						correctAnswers: action.payload.count,
					},
				},
			}
		case ActionType.SET_INCORRECT_ANSWER:
			return {
				...state,
				userAnswers: {
					...state.userAnswers,
					[action.payload.userId]: {
						...state.userAnswers[action.payload.userId],
						wrongAnswers: action.payload.count,
					},
				},
			}
		case ActionType.SELECT_ANSWER:
			return {
				...state,
				totalAnswered: state.totalAnswered + 1,
				selectedAnswers: {
					...state.selectedAnswers,
					[action.payload.userId]: {
						...state.selectedAnswers[action.payload.userId],
						[state.currentQuestionIndex]: action.payload.answer,
					},
				},
			}
		case ActionType.SET_CURRENT_QUESTION_INDEX:
			return {
				...state,
				currentQuestionIndex: action.payload.index,
			}
		case ActionType.START_TIMER:
			return {
				...state,
				timerStarted: true,
				startTime: action.payload.startTime,
			}
		case ActionType.TIME_UP:
			return {
				...state,
				timeUp: true,
			}
		case ActionType.UPDATE_TIMER:
			return {
				...state,
				elapsedTime: action.payload.elapsedTime,
			}
		case ActionType.RESET:
			return initialState
		default:
			return state
	}
}

export default questionsReducer
