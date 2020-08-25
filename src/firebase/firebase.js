import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyAq6Ndp8ZdBK_p8lxxhPnKm2FwJ90rpDLY',
  authDomain: 'marketboy-a51e5.firebaseapp.com',
  storageBucket: 'marketboy-a51e5.appspot.com',
  projectId: 'marketboy-a51e5',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
//analytics is optional for this tutoral
// firebase.analytics();

export { storage, firebase as default };
