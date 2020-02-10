import firebase from "firebase";

const fireConfig = {
  apiKey: "AIzaSyB_3av8U_3Ct6jZ-ouEGCrVkOPzVsb1sbk",
  authDomain: "changcucu-9085c.firebaseapp.com",
  databaseURL: "https://changcucu-9085c.firebaseio.com",
  projectId: "changcucu-9085c",
  storageBucket: "changcucu-9085c.appspot.com",
  messagingSenderId: "1081130775901",
  appId: "1:1081130775901:web:8e401a930311eafad964b4"
};

let fireApp;

// 判斷是否已經初始化過，如果沒有才初始化，有就直接使用firebase.app()
if (!fireApp && !firebase.apps.length) {
  fireApp = firebase.initializeApp(fireConfig);
} else {
  fireApp = firebase.app();
}

fireApp
  .database()
  .ref()
  .once("value", snap => {
    console.log(snap.val());
  });

export default fireApp;

// let autht = firebaseclient.initializeApp(firebaseConfig);
// console.log(firebaseclient.auth());
// export { autht };
