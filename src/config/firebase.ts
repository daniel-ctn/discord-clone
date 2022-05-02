import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: 'd-discord',
  storageBucket: 'd-discord.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getDatabase()
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { app, db, auth, provider }
