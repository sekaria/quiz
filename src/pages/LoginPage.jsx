import React from 'react'
import LoginInput from '../components/Login/LoginInput'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/authUser/action'

function LoginPage() {
	const dispatch = useDispatch()

	const onLogin = ({ email, password }) => {
		dispatch(asyncSetAuthUser({ email, password }))
	}

	return (
		<section className="flex justify-center items-center h-screen">
			<div className="max-w-[400px] w-full mx-auto p-4">
				<header className="mb-8">
					<h1 className="text-3xl font-bold text-center">Login</h1>
				</header>
				<article>
					<LoginInput login={onLogin} />
					<p className="text-center mt-4 text-sm">
						Don&apos;t have an account?
						<Link to="/register" className="hover:text-blue-500">
							Register
						</Link>
					</p>
				</article>
			</div>
		</section>
	)
}

export default LoginPage
