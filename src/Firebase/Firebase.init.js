import { initializeApp } from "firebase/app"
import firebaseConfig from "./Firebase.config";

// Initialize Firebase
const initAuth = () =>initializeApp(firebaseConfig);
export default initAuth;