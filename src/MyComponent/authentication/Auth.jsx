import { useState } from "react";
import { registerUser, loginUser, logoutUser } from "./authService";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleRegister = async () => {
    try {
      const newUser = await registerUser(email, password);
      setUser(newUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const loggedInUser = await loginUser(email, password);
      setUser(loggedInUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container ">
      <h2>{user ? `Welcome, ${user.email}` : "Auth System"}</h2>
      {!user && (
        <>
          <div className="flex flex-col text-white">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
          </div>
        </>
      )}
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Auth;
