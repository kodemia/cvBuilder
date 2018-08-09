// Initialize Firebase
var config = {
  apiKey: "AIzaSyDtbCHbYWiMqM5I8x1rTBGhfcHzPB2H68Q",
  authDomain: "kodecamp-ddca1.firebaseapp.com",
  databaseURL: "https://kodecamp-ddca1.firebaseio.com",
  projectId: "kodecamp-ddca1",
  storageBucket: "kodecamp-ddca1.appspot.com",
  messagingSenderId: "387601414926"
};
firebase.initializeApp(config);

const provider = new firebase.auth.FacebookAuthProvider();
const auth     = firebase.auth();
const db       = firebase.database();
const storage  = firebase.storage();


// Auth State Changed
auth.onAuthStateChanged((user) => {
  if (user) {
		signedIn(user);
  } else {
		signedOut();
  }
});
