import React, { useEffect } from 'react'
import Start from '../components/Start'
import { useSelector, useDispatch } from 'react-redux'
import { totalQuestions } from '../states/questions/action'

function HomePage() {
	const dispatch = useDispatch()
	const total = useSelector((state) => state.questions.totalQuestions)

	useEffect(() => {
		dispatch(totalQuestions())
	}, [dispatch])

	return (
		<div>
			<Start totalQuestions={total} />
		</div>
	)
}

export default HomePage
