import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyBQwir-YAaLHfWiYMnuTIhuV4JTAvaE678",
	authDomain: "alfcdashboard.firebaseapp.com",
	projectId: "alfcdashboard",
	storageBucket: "alfcdashboard.appspot.com",
	messagingSenderId: "796568236586",
	appId: "1:796568236586:web:16f16b427aaba46a758953",
	databaseURL: "https://alfcdashboard-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const DB = getDatabase(app);

export {DB as default, ref, onValue, set};