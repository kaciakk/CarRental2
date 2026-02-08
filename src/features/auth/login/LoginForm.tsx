import { useState } from "react";

const LoginForm = () => {
  const [id, setId] = useState("2");

  function login() {
    localStorage.setItem("currentUserId", id);
  }
  return (
    <div>
      <form>
        <input value={id} placeholder="Login" />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
