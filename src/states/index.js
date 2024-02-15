import { configureStore } from '@reduxjs/toolkit'
// import { loadingBarReducer } from 'react-redux-loading-bar'
import authUserReducer from './authUser/reducer'
import usersReducer from './users/reducer'
import questionsReducer from './questions/reducer'

const store = configureStore({
	reducer: {
		authUser: authUserReducer,
		// loadingBar: loadingBarReducer,
		users: usersReducer,
		questions: questionsReducer,
	},
})

export default store
