import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { Alert as MuiAlert } from '@mui/material';

const Alert = (props, ref) => {
	const [isDisplay, setDisplay] = useState(false);
	const [message, setMessage] = useState('');
	const [type, setType] = useState('');

	const sx = props?.sx;

	const clearState = () => {
		setDisplay(false);
		setMessage('');
		setType('');
	};

	useImperativeHandle(
		ref,
		() => ({
			show: ({
				message,
				type = 'success',
				autoClose = false,
				autoCloseDuration = 5000,
			}) => {
				setDisplay(true);
				setMessage(message);
				setType(type);

				if (autoClose) {
					setTimeout(() => {
						clearState();
					}, autoCloseDuration);
				}
			},
			close: () => clearState(),
		}),
		[]
	);

	if (Boolean(isDisplay && message)) {
		return (
			<MuiAlert
				sx={sx}
				onClose={() => {
					clearState();
				}}
				severity={type}
			>
				{message}
			</MuiAlert>
		);
	}

	return null;
};

export default forwardRef(Alert);
