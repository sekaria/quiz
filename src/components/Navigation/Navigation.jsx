import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Navigation({ authUser, signOut }) {
	return (
		<div className="max-w-[1640px] mx-auto flex justify-between items-center bg-blue-500 text-white py-4 px-6">
			<Link className="text-xl font-bold" to="/">
				QUIZ
			</Link>
			<div className="flex items-center">
				<img className="w-10 h-10 rounded-full mr-4" src={authUser.avatar} alt="Avatar user" />
				<button className="outline outline-1 outline-white text-white hover:bg-blue-400 font-semibold py-2 px-4 rounded" type="button" onClick={signOut}>
					Sign Out
				</button>
			</div>
		</div>
	)
}

const authUserShape = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	photo: PropTypes.string.isRequired,
}

Navigation.propTypes = {
	authUser: PropTypes.shape(authUserShape).isRequired,
	signOut: PropTypes.func.isRequired,
}

export default Navigation
