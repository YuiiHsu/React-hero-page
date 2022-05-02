import axios from 'axios';

const service = axios.create({
	baseURL: "https://hahow-recruit.herokuapp.com",
	timeout: 5000
});

service.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default service;
