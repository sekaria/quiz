import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../../hooks/useInput'

function LoginInput({ login }) {
	const [email, onEmailChange] = useInput('')
	const [password, onPasswordChange] = useInput('')

	return (
		<form className="flex flex-col space-y-4 max-w-xs mx-auto">
			<input className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="text" value={email} onChange={onEmailChange} placeholder="Email" />
			<input className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
			<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none" type="button" onClick={() => login({ email, password })}>
				Login
			</button>
		</form>
	)
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
}

export default LoginInput
