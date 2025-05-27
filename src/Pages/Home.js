import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigationHandler = () => {
    navigate("/About");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={navigationHandler}>About</button>
    </>
  );
};
export default Home;
