import "./Loginpage.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault(); // prevent form refresh
    // You can also add validation or API login logic here

    navigate("/Homepage"); // navigate to homepage
  }

  return (
    <>
      <form className="Form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="Comp">
          <label className="Element">Email Id</label>
          <input
            className="Box"
            type="email"
            placeholder="Enter your Email Id"
            required
          />
        </div>
        <div className="Comp">
          <label className="Element">Password</label>
          <input
            className="Box"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="Loginbutton" type="submit">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
