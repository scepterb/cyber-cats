import { useEffect, useState } from 'react';
import { auth, googleProvider, db } from "./firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth";       // https://firebase.google.com/docs/reference/js/auth.md#auth_package
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

export function Home() {
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

  return (
    <div style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <h1>My Club</h1>
      <p>Welcome to the club homepage.</p>

      {user ? (
        <>
          <p>Signed in as {user.displayName}</p>
          <img src={user.photoURL ?? ""} alt="" width={48} height={48} style={{ borderRadius: 24 }} />
          <div style={{ marginTop: 12 }}>
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        </>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      )}
    </div>
  );

}