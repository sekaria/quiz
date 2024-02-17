import React, { useEffect, useState } from 'react'
import Start from '../components/Start'
import { useSelector, useDispatch } from 'react-redux'
import { totalQuestions } from '../states/questions/action'
import Loading from '../components/Loading'

function HomePage() {
	const dispatch = useDispatch()
	const total = useSelector((state) => state.questions.totalQuestions)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		dispatch(totalQuestions()).then(() => {
			setLoading(false)
		})
	}, [dispatch])

	return (
		<div>
			{/* Tampilkan komponen Loading selama total pertanyaan dimuat */}
			{loading ? <Loading /> : <Start totalQuestions={total} />}
		</div>
	)
}

export default HomePage
