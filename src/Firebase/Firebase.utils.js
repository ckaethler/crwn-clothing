import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBHOTWIzoxTiABEF-gZPe2yRNAS_jqchsg",
    authDomain: "crwn-clothing-87cf9.firebaseapp.com",
    databaseURL: "https://crwn-clothing-87cf9.firebaseio.com",
    projectId: "crwn-clothing-87cf9",
    storageBucket: "crwn-clothing-87cf9.appspot.com",
    messagingSenderId: "280060918978",
    appId: "1:280060918978:web:95e3f19f752c456c650f5b",
    measurementId: "G-YQ3E3SWKSW"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
}  

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
