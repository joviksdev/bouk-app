import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { useDispatch, useSelector } from 'react-redux';
import { setDriverAccepted } from './redux/generalReducer';
import store from '../src/redux/store.js';
const firebaseConfig = {
	apiKey: 'AIzaSyAex8KKL5u14mXeHecCc1FBTKNq7lxFfmQ',
	authDomain: 'boukaccess-38055.firebaseapp.com',
	projectId: 'boukaccess-38055',
	storageBucket: 'boukaccess-38055.appspot.com',
	messagingSenderId: '299216292522',
	appId: '1:299216292522:web:3cf6d844ed847b6b521ed3',
	measurementId: 'G-6Z0VBX3SRV',
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAeD_lVMmttaExUpsktbzwpgf1HG2Q1clM",

//   authDomain: "bouk-fcm.firebaseapp.com",

//   projectId: "bouk-fcm",

//   storageBucket: "bouk-fcm.appspot.com",

//   messagingSenderId: "1019258880124",

//   appId: "1:1019258880124:web:9c921c78614bfe23fb09f9",

//   measurementId: "G-5N6SSPXMCX",
// };
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
//export const auth = getAuth(app);

//   onMessage(messaging, (payload) => {
//     console.log('Message received. ', payload);
//     // ...
//   });

const messaging = getMessaging(app);
onMessage((payload) => {
	console.log('onMessage event fired', payload);
});

export const getTokens = (setToken) => {
	console.log('Requesting permission...');
	Notification.requestPermission().then((permission) => {
		if (permission === 'granted') {
			console.log('Notification permission granted.');

			try {
				return getToken(messaging, {
					vapidKey:
						'BFTwotEvLW-InNaorkhsXCameKskqLl1wvQgEYrp9QliVF5B0hE4PnXne60YSOVtdyBlURIMT03gAGDTMUJaIns',
				})
					.then((currentToken) => {
						if (currentToken) {
							console.log(currentToken);
							localStorage.setItem('fbToken', JSON.stringify(currentToken));
							typeof setToken && setToken(currentToken);
							//return currentToken;
							// Send the token to your server and update the UI if necessary
							// ...
						} else {
							// Show permission request UI

							console.log(
								'No registration token available. Request permission to generate one.'
							);

							// ...
						}
					})
					.catch((err) => {
						console.log('An error occurred while retrieving token. ', err);
						// ...
					});
			} catch (err) {
				console.log9(err);
			}

			// TODO(developer): Retrieve a registration token for use with FCM.
			// In many cases once an app has been granted notification permission,
			// it should update its UI reflecting this.
		} else {
			console.log('Notification permission not granted.');
		}
	});
};

export const onMessageListener = () =>
	new Promise((resolve) => {
		onMessage(messaging, (payload) => {
			// const { title, body } = payload.notification;
			// const data = payload.data;
			// let options = {
			// 	body,
			// 	icon: data?.icon,
			// 	data: { url: data?.click_action }, //the url which we gonna use later
			// 	actions: [{ action: 'open_url', title: 'Read Now' }],
			// };

			// self.registration.showNotification(title, options);
			resolve(payload);
		});
	});
