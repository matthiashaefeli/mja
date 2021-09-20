import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_NsdaQ5ChFxw9c9Y0MYQtQP4VNfY7d5w",
  authDomain: "mjapp-f580b.firebaseapp.com",
  projectId: "mjapp-f580b",
  storageBucket: "mjapp-f580b.appspot.com",
  messagingSenderId: "89495793432",
  appId: "1:89495793432:web:c76fcf1257a0a56696b86d",
  measurementId: "G-W4S2HD53JC"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };