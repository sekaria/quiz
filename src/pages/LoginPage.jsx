import React from 'react'
import LoginInput from '../components/Login/LoginInput'
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/authUser/action'

function LoginPage() {
	const dispatch = useDispatch()

	const onLogin = ({ email, password }) => {
		dispatch(asyncSetAuthUser({ email, password }))
	}

	return (
		<div className="h-screen flex justify-center items-center bg-blue-500">
			<section className="max-w-[1640px] mx-auto">
				<article className="bg-white rounded-lg">
					<LoginInput login={onLogin} />
				</article>
			</section>
		</div>
	)
}

export default LoginPage
