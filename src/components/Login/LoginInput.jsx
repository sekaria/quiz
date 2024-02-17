import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../../hooks/useInput'
import { Link } from 'react-router-dom'

function LoginInput({ login }) {
	const [email, onEmailChange] = useInput('')
	const [password, onPasswordChange] = useInput('')

	return (
		<div className="flex flex-col items-center justify-center p-5">
			<h1 className="text-3xl font-bold text-center">Welcome</h1>
			<form className="space-y-4 max-w-xs mx-auto">
				<div className="flex flex-col items-start">
					<label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
						Name
					</label>
					<input className="w-64 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" value={email} onChange={onEmailChange} placeholder="Email" />
				</div>

				<div className="flex flex-col items-start">
					<label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
						Password
					</label>
					<div>
						<input className="w-64 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
					</div>
				</div>
				<button className="w-64 bg-blue-500 hover:bg-blue-600 text-white font-bold px-3 py-2 rounded focus:outline-none" type="button" onClick={() => login({ email, password })}>
					Login
				</button>
			</form>
			<p className="text-xs mt-2">
				Don&apos;t have an account?
				<span className="text-blue-500">
					<Link to="/register"> Register</Link>
				</span>
			</p>
		</div>
	)
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
}

export default LoginInput
