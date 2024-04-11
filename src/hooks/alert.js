import { enqueueSnackbar } from 'notistack';

export const useToastAlert = () => {
	return ({ message, type }) =>
		enqueueSnackbar(message, {
			variant: type,
		});
};
