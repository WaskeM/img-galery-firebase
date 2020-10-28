//import * as firebase from "firebase/app";
import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDAgOxbtRd_BpgLkECw9iZ1uXMSGR1tdtI",
  authDomain: "firegram-eaafe.firebaseapp.com",
  databaseURL: "https://firegram-eaafe.firebaseio.com",
  projectId: "firegram-eaafe",
  storageBucket: "firegram-eaafe.appspot.com",
  messagingSenderId: "265289420896",
  appId: "1:265289420896:web:6e4ef85e50bc56be937305"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
