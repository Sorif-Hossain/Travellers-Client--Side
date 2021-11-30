import { initializeApp } from "firebase/app";
const firebaseConfig = {
 apiKey: "AIzaSyAKLTYlln8OF80VyXoVosKvpdZ3QS32GaI",
  authDomain: "traveller-2ed83.firebaseapp.com",
  projectId: "traveller-2ed83",
  storageBucket: "traveller-2ed83.appspot.com",
  messagingSenderId: "46547972494",
  appId: "1:46547972494:web:98486f3cf9e709eb54b4df"
};

const initilizeFirebase = () => {
  initializeApp(firebaseConfig);
};
export default initilizeFirebase;
