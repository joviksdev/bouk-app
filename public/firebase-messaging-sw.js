// Scripts for firebase and firebase messaging
importScripts(
	'https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js'
);
importScripts(
	'https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js'
);

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
	apiKey: 'YOUR_API_KEY',
	authDomain: 'YOUR_AUTH_DOMAIN',
	projectId: 'YOUR_PROJECT_ID',
	storageBucket: 'YOUR_STORAGE_BUCKET',
	messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
	appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
	console.log('Received background message ', payload);

	const data = JSON.parse(payload.data.body);
	console.log(data);
	let notificationTitle = '';
	let notificationOptions = {};

	if (payload.notification.title == 'Accepted') {
		notificationTitle = 'Delivery Accepted';
		notificationOptions = {
			body: data.Name + ' has accepted your request',
		};
	} else if (payload.notification.title == 'Picked Up') {
	}

	self.registration.showNotification(notificationTitle, notificationOptions);

	self.addEventListener('notificationclick', function (event) {
		let url = '';
		event.notification.close(); // Android needs explicit close.
		event.waitUntil(
			clients
				.matchAll({ type: 'window', includeUncontrolled: true })
				.then((windowClients) => {
					// Check if there is already a window/tab open with the target URL
					for (var i = 0; i < windowClients.length; i++) {
						var client = windowClients[i];
						// If so, just focus it.
						if (client.url === url && 'focus' in client) {
							return client.focus();
						}
					}
					// If not, then open the target URL in a new window/tab.
					if (clients.openWindow) {
						return clients.openWindow(url);
					}
				})
		);
	});
});
