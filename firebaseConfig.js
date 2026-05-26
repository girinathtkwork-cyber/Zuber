import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA8_GHg4CeOJyYbPfBk2UUTvWmHr_S_fFc",
  authDomain: "zuber-490ba.firebaseapp.com",
  projectId: "zuber-490ba",
  storageBucket: "zuber-490ba.firebasestorage.app",
  messagingSenderId: "449821536115",
  appId: "1:449821536115:web:fd8a0fa265193e59659f06"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };