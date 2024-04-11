import React, { useState } from 'react';
import SignIn from './signin/signin';
import { AUTH_VIEW } from './enum';
import ForgotPassword from './forgot-password/forgot-password';
import SignUp from './signup/signup';
import EnterCode from './enter-code/enter-code';
import SignUpSuccess from './signup-success/signup-success';
import EmailSent from './email-sent/email-sent';
import ResetForgotPassword from './forgot-password/reset-forgot-password';
import ModalLayout from '../../components/modal/modal-layout';

const AuthView = ({ isOpen, closeModal, exact, callback }) => {
	const [currentAuthView, setCurrentAuthView] = React.useState(
		AUTH_VIEW.SIGNIN.value
	);

	const [payload, setPayload] = useState(null);

	const handleSetPayload = (data) =>
		setPayload(payload ? { ...payload, ...data } : data);

	// setCurrentAuthView(AUTH_VIEW.SIGNIN.value);
	React.useEffect(() => {
		setCurrentAuthView(exact);
	}, [exact]);

	function renderBasedOnCurrentView() {
		switch (currentAuthView) {
			case 'SIGNIN':
				return (
					<SignIn
						setCurrentAuthView={setCurrentAuthView}
						closeModal={closeModal}
						callback={callback}
					/>
				);

			case 'SIGNUP':
				return <SignUp setCurrentAuthView={setCurrentAuthView} />;

			case 'FORGOT_PASSWORD':
				return (
					<ForgotPassword
						setPayload={handleSetPayload}
						setCurrentAuthView={setCurrentAuthView}
					/>
				);

			case 'RESET_FORGOT_PASSWORD':
				return (
					<ResetForgotPassword
						payload={payload}
						setPayload={handleSetPayload}
						setCurrentAuthView={setCurrentAuthView}
					/>
				);

			case 'ENTER_CODE':
				return <EnterCode setCurrentAuthView={setCurrentAuthView} />;

			case 'SIGNUP_SUCCESS':
				return <SignUpSuccess setCurrentAuthView={setCurrentAuthView} />;

			case 'EMAIL_SEND_SUCESS':
				return <EmailSent setCurrentAuthView={setCurrentAuthView} />;

			default:
				return null;
		}
	}

	return (
		<ModalLayout isOpen={isOpen} hasCloseButton={true} closeModal={closeModal}>
			{renderBasedOnCurrentView()}
		</ModalLayout>
	);
};

export default AuthView;
