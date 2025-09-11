import { useAuth } from "../useAuth";
import "./NavButton.css";

export default function AuthButton() {
  const {user, handleGoogleSignIn, handleGoogleSignOut} = useAuth();

  if (user) {
    return (
      <button className="logout" title="Sign Out" onClick={handleGoogleSignOut}>
        <img src={user.photoURL ?? ""} alt="Profile" className="profile"/>
      </button>
    );
  }

  return (
    <button className="login-btn" onClick={handleGoogleSignIn}>
      <span>Google Sign-In</span>
    </button>
  );
}