import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};

export default HomePage;
