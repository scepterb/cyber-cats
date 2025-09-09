import { useEffect, useState } from 'react';
import { auth, googleProvider, db } from "./firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";       // https://firebase.google.com/docs/reference/js/auth.md#auth_package
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

// TODO: understand this code
export default function AuthButton() {
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  const handleGoogleSignIn = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    const u = res.user;
    // Create or update user profile in Firestore
    const ref = doc(db, "users", u.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      await setDoc(ref, {
        uid: u.uid,
        email: u.email,
        name: u.displayName,
        photoURL: u.photoURL,
        createdAt: serverTimestamp(),
      });
    } else {
      await setDoc(
        ref,
        { email: u.email, name: u.displayName, photoURL: u.photoURL, updatedAt: serverTimestamp() },
        { merge: true }
      );
    }
  };

  const handleSignOut = async () => signOut(auth);

  if (user) {
    return (
      <button title="Sign Out" onClick={handleSignOut}>
        <img
          src={user.photoURL ?? ""}
          alt="Profile"
          className="profile"
          referrerPolicy="no-referrer" />
      </button>
    );
  }

  return (
    <button className="login-btn" onClick={handleGoogleSignIn}>
      Sign In with Google
    </button>
  );
}