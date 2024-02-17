import React from 'react'
import { useNavigate } from 'react-router-dom'
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
		<div className="h-screen flex justify-center items-center bg-blue-500">
			<section className="max-w-[1640px] mx-auto">
				<article className="bg-white rounded-lg">
					<RegisterInput register={onRegister} />
				</article>
			</section>
		</div>
	)
}

export default RegisterPage
