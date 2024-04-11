import axios from 'axios';

const nodeEnv = process.env.REACT_APP_ENV;

const baseUrls = {
	development: process.env.REACT_APP_DEV_API_URL,
	staging: process.env.REACT_APP_STAGE_API_URL,
	production: process.env.REACT_APP_PROD_API_URL,
};

const BASE_URL = baseUrls[nodeEnv];
// const TOKEN = http://localhost:8001/"
//   JSON.parse(JSON.parse(localStorage.getItem("auth:details")).user).currentUser
//     .accessToken || "";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
});

userRequest.interceptors.request.use(
	(config) => {
		const currentUser = localStorage.getItem('auth:details')
			? JSON.parse(localStorage.getItem('auth:details'))
			: null;

		const TOKEN = currentUser.access_token;

		if (TOKEN) {
			config.headers['Authorization'] = 'Bearer ' + TOKEN;
		}
		// config.headers['Content-Type'] = 'application/json';
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

userRequest.interceptors.response.use(
	(response) => {
		return response;
	},
	function (error) {
		const originalRequest = error.config;

		const dataError =
			error && error.response && error.response?.data
				? error.response?.data
				: error;
		// console.log('DATA_ERROR::', dataError);

		// if (
		//   error.response.status === 401 &&
		//   originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
		// ) {
		//   router.push('/login')
		//   return Promise.reject(error)
		// }

		if (error.response.status === 401) {
			originalRequest._retry = true;
			let user = localStorage.getItem('auth:details')
				? JSON.parse(localStorage.getItem('auth:details'))
				: null;

			const TOKEN = user.refresh_token;

			return publicRequest
				.post('/auth/refresh-token', {
					token: TOKEN,
				})
				.then((res) => {
					console.log('RES::', res);
					const access_token = res.data.data.access_token;
					const refresh_token = res.data.data.refresh_token;
					user = {
						...user,
						access_token,
						refresh_token,
					};

					localStorage.setItem('auth:details', JSON.stringify(user));

					axios.defaults.headers.common[
						'Authorization'
					] = `Bearer ${access_token}`;

					return axios(originalRequest);
				})
				.catch((err) => {
					console.log('Error => ', err.response);
				});
		}
		return Promise.reject(dataError);
	}
);
