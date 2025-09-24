import { useAuth } from '../useAuth';

import './css/NavMenu.css';

export default function AuthMenuItem() {
  const {user, handleGoogleSignIn, handleGoogleSignOut} = useAuth();

  return (
    <button className="menu-item menu-item-signout" onClick={user ? handleGoogleSignOut : handleGoogleSignIn}>
      {/* If user is not null, put in profile pic */}
      {user && 
        <div className='logout'>
          <img src={user.photoURL ?? ""} alt="Profile" className="profile"/>
        </div>
      }
      
      <a>{user ? "Sign Out" : "Sign-In"}</a>
    </button>
  );
}