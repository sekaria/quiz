import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import RegisterInput from '../components/Register/RegisterInput'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../states/users/action'

function RegisterPage() {
	const navigate = useNavigate('')
	const dispatch = useDispatch('')

	const onRegister = ({ name, email, password }) => {
		dispatch(asyncRegisterUser({ email, name, password }))
		navigate('/')
	}

	return (
		<section className="">
			<header className="">
				<h1>Register</h1>
			</header>
			<article className="">
				<RegisterInput register={onRegister} />

				<p>
					Already have an account? <Link to="/">Login</Link>
				</p>
			</article>
		</section>
	)
}

export default RegisterPage
