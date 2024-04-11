export const handleResponseError = ({ error, callback, customMessage }) => {
	if (error && Object.keys(error).length > 0) {
		if (error.response) {
			if (callback && typeof callback === 'function') callback(); // Callback funcion
			if (error.response.data) {
				const data = error.response.data;
				let msg = '';
				if (data.message) msg = data.message;
				if (data.data) {
					if (!msg) msg = data.data;
					else msg += `, ${data.data}`;
				}

				return msg;
			}
		}

		return customMessage || 'Something went wrong';
	}
};
