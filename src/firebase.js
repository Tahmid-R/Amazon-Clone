import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Connecting firbase to app for user authentication

const firebaseConfig = {
  apiKey: "AIzaSyAfdt58vVFXzpNNy_Q8EPji0IL7wghMevU",
  authDomain: "clone-7a67a.firebaseapp.com",
  projectId: "clone-7a67a",
  storageBucket: "clone-7a67a.appspot.com",
  messagingSenderId: "48176245158",
  appId: "1:48176245158:web:8c24b44c6f489e8b380767",
  measurementId: "G-P6K3KTW438",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth};