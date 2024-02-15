import axios from 'axios'

const api = (() => {
	const BASE_URL = 'https://forum-api.dicoding.dev/v1'

	function getAccessToken() {
		return localStorage.getItem('accessToken')
	}

	async function _fetchWithAuth(url, options = {}) {
		return axios({
			...options,
			url: url,
			headers: {
				...options.headers,
				Authorization: `Bearer ${getAccessToken()}`,
			},
		})
	}

	function putAccessToken(token) {
		localStorage.setItem('accessToken', token)
	}

	async function register({ name, email, password }) {
		try {
			const response = await axios.post(`${BASE_URL}/register`, {
				name,
				email,
				password,
			})

			const { status, data, message } = response.data

			if (status !== 'success') {
				throw new Error(message)
			}

			return data.user
		} catch (error) {
			throw new Error(error.message)
		}
	}

	async function login({ email, password }) {
		try {
			const response = await axios.post(`${BASE_URL}/login`, {
				email,
				password,
			})

			const { status, data, message } = response.data

			if (status !== 'success') {
				throw new Error(message)
			}

			return data.token
		} catch (error) {
			throw new Error(error.message)
		}
	}

	async function getOwnProfile() {
		try {
			const response = await _fetchWithAuth(`${BASE_URL}/users/me`)

			const { status, data, message } = response.data

			if (status !== 'success') {
				throw new Error(message)
			}

			return data.user
		} catch (error) {
			throw new Error(error.message)
		}
	}

	async function getAllUsers() {
		try {
			const response = await axios.get(`${BASE_URL}/users`)

			const { status, data, message } = response.data

			if (status !== 'success') {
				throw new Error(message)
			}

			return data.users
		} catch (error) {
			throw new Error(error.message)
		}
	}

	async function fetchQuestions() {
		try {
			const response = await axios.get(`https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=boolean`)
			return response.data.results
		} catch (error) {
			throw new Error('Failed to fetch questions')
		}
	}

	return {
		login,
		register,
		getAccessToken,
		putAccessToken,
		getAllUsers,
		getOwnProfile,
		fetchQuestions,
	}
})()

export default api
