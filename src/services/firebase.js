import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

function startFireBase() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDwMXlUbc5yVHhyul1XKItoRJBsxqFuj64",
        authDomain: "crud-react-firebase-96089.firebaseapp.com",
        databaseURL: "https://crud-react-firebase-96089-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "crud-react-firebase-96089",
        storageBucket: "crud-react-firebase-96089.appspot.com",
        messagingSenderId: "824026040770",
        appId: "1:824026040770:web:5b456a862cef4bdac46e5b",
        measurementId: "G-24420MYG25"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    return getDatabase(app);
}

export default startFireBase;