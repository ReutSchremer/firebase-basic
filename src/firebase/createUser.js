import {
    Auth, getAuth, signInWithEmailAndPassword,
    createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth'
import { auth, firestore } from './firebase';
import {
    setDoc, doc, updateDoc,
    getFirestore, collection, addDoc
} from 'firebase/firestore'

const provider = new GoogleAuthProvider();

export const googleLogin = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            console.log('credential:', credential)
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}
export async function register(email, password) {

    const firestore = getFirestore()
    firestore && createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const usersref = collection(firestore, 'users');
            setDoc(doc(usersref, userCredential.user.uid), {
                name: "NAME",
            })

        })
}

export async function login(email, password) {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log('res:', res)
    } catch (error) {
        console.log('error:', error)
    }

}


export async function createNewId() {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(firestore, "cities"), {
        name: "Tokyo",
        country: "Japan"
    });
    console.log("Document written with ID: ", docRef.id);
}

export async function updateDC() {
    const washingtonRef = doc(firestore, "cities", "DC");

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
        capital: true
    });

}