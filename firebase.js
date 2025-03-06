// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsclj7BplmRZ-u1y-B5usbv_WBDvLltl4",
  authDomain: "careerbuild-e241f.firebaseapp.com",
  projectId: "careerbuild-e241f",
  storageBucket: "careerbuild-e241f.firebasestorage.app",
  messagingSenderId: "59985493662",
  appId: "1:59985493662:web:cd3b6fcfa696103eb2458f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Add login functionality
document.getElementById("loginform").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("mail").value;
  const password = document.getElementById("password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Redirect on successful login
      window.location.href = "minipro.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
