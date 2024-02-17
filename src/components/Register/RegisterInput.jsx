import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../../hooks/useInput'
import { Link } from 'react-router-dom'

function RegisterInput({ register }) {
	const [name, onNameChange] = useInput('')
	const [email, onEmailChange] = useInput('')
	const [password, onPasswordChange] = useInput('')

	return (
		<div className="flex flex-col items-center justify-center p-5">
			<h1 className="text-3xl font-bold text-center">Create an account</h1>
			<form className="space-y-4 max-w-xs mx-auto">
				<div className="flex flex-col items-start">
					<label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
						Name
					</label>
					<input className="w-64 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" id="name" type="text" value={name} onChange={onNameChange} placeholder="Name" />
				</div>
				<div className="flex flex-col items-start">
					<label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
						Email
					</label>
					<input className="w-64 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" id="email" type="text" value={email} onChange={onEmailChange} placeholder="Email" />
				</div>
				<div className="flex flex-col items-start">
					<label className="block md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
						Password
					</label>
					<input className="w-64 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" id="password" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
				</div>
				<button className="w-64 bg-blue-500 hover:bg-blue-600 text-white font-bold px-3 py-2 rounded focus:outline-none" type="button" onClick={() => register({ name, email, password })}>
					Register
				</button>
			</form>
			<p className="text-xs mt-2">
				Already have an account?
				<span className="text-blue-500">
					<Link to="/"> Login</Link>
				</span>
			</p>
		</div>
	)
}

RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
}

export default RegisterInput
