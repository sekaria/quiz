import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../../hooks/useInput'

function RegisterInput({ register }) {
	const [name, onNameChange] = useInput('')
	const [email, onEmailChange] = useInput('')
	const [password, onPasswordChange] = useInput('')

	return (
		<form className="w-full max-w-sm mx-auto">
			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
						Name
					</label>
				</div>
				<div className="md:w-2/3">
					<input
						className="appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
						id="name"
						type="text"
						value={name}
						onChange={onNameChange}
						placeholder="Name"
					/>
				</div>
			</div>
			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
						Email
					</label>
				</div>
				<div className="md:w-2/3">
					<input
						className="appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
						id="email"
						type="text"
						value={email}
						onChange={onEmailChange}
						placeholder="Email"
					/>
				</div>
			</div>
			<div className="md:flex md:items-center mb-6">
				<div className="md:w-1/3">
					<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
						Password
					</label>
				</div>
				<div className="md:w-2/3">
					<input
						className="appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
						id="password"
						type="password"
						value={password}
						onChange={onPasswordChange}
						placeholder="Password"
					/>
				</div>
			</div>
			<div className="md:flex md:items-center">
				<div className="md:w-1/3"></div>
				<div className="md:w-2/3">
					<button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={() => register({ name, email, password })}>
						Register
					</button>
				</div>
			</div>
		</form>
	)
}

RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
}

export default RegisterInput
