import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDIhpBFBQxTVYQqp4im_Ud59rch9Sx24_s",
    authDomain: "chat-realtime-dapan.firebaseapp.com",
    databaseURL: "https://chat-realtime-dapan-default-rtdb.firebaseio.com",
    projectId: "chat-realtime-dapan",
    storageBucket: "chat-realtime-dapan.appspot.com",
    messagingSenderId: "415311811950",
    appId: "1:415311811950:web:b9436525e14b39e2401d7f"
}

export default firebase.initializeApp(firebaseConfig)