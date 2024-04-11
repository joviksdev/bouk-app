importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');
var firebaseConfig = {
    messagingSenderId: "1019258880124",
};// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
console.log('[firebase-messaging-sw.js] Received background message ', payload);
const notificationTitle = payload.notification.title;
const notificationOptions = {
body: payload.notification.body,
};
 

return self.registration.showNotification(notificationTitle,
notificationOptions);
});
self.addEventListener('notificationclick', event => {
   console.log(event)
});