// Service worker de notificaciones push (Firebase Cloud Messaging).
// Recibe las notificaciones cuando Acordia está cerrada o en segundo plano y, al tocarlas,
// abre la app en el destino (evento, solicitud, gasto…). Datos públicos de la app; no son secretos.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDap0iPWeQ4aBufwY2eXof530BX1wRWXlA',
  authDomain: 'acordia-f6677.firebaseapp.com',
  projectId: 'acordia-f6677',
  storageBucket: 'acordia-f6677.firebasestorage.app',
  messagingSenderId: '1051616154069',
  appId: '1:1051616154069:web:7b372ea3b338c45a6a2d5c',
});

// Con "notification" en el mensaje, Firebase muestra la notificación solo; el enlace de destino
// viaja en webpush.fcm_options.link y se abre al tocarla.
firebase.messaging();
