import { useContext,} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";


const Login = () => {
  const {handleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');


    handleSignIn(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if (user) {
        navigate(location?.state ? location.state : '/')
      }
      

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }

    return (
      <div className="max-w-[1200px] mx-auto w-96">
      <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to={'/register'} href="/login" className="label-text-alt link link-hover">Don&apos;t Have Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-warning">Login</button>
        </div>
      </form>
    </div>
    );
};

export default Login;