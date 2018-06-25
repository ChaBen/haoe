import { initializeApp } from 'firebase';

var app = initializeApp({
  apiKey: 'AIzaSyB0PxEUh7jCPV1T7KyBbHw1r6ATYk_aXjA',
  authDomain: 'hantuan-1a496.firebaseapp.com',
  databaseURL: 'https://hantuan-1a496.firebaseio.com',
  projectId: 'hantuan-1a496',
  storageBucket: 'hantuan-1a496.appspot.com',
  messagingSenderId: '533832599593'
});

export const db = app.database();
export const brandRef = db.ref('brands');