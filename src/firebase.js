import * as firebase from 'firebase/app';

import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDTKn_PH_aPAAh-gJsPE-4sb-waElbBAy8",
  authDomain: "exchange-currency-rate.firebaseapp.com",
  databaseURL: "https://exchange-currency-rate.firebaseio.com",
  projectId: "exchange-currency-rate",
  storageBucket: "",
  messagingSenderId: "1037377517784"
};

const firebaseApp = firebase.initializeApp(config);
window.firebase = firebaseApp;
export default firebaseApp;