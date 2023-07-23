// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB6WluKMjUqrSpQ4JLzkxOR-avmOHfHiFk",
	authDomain: "loja-da-fran-e7e18.firebaseapp.com",
	projectId: "loja-da-fran-e7e18",
	storageBucket: "loja-da-fran-e7e18.appspot.com",
	messagingSenderId: "1055165961942",
	appId: "1:1055165961942:web:0ad65ddbdb6594c2959b77",
	measurementId: "G-72HJX2RF5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics };
