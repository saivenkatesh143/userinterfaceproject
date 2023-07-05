import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchData} from "../../main.js";
const Loginforms = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/login",
      {
        username,
        password
      },
      "POST")
      .then((data) => {
        if (!data.message) {
          console.log(data)
          storeInlocalStorage(data);
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  const storeInlocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate("/profile")
  }

  return (

       <div>
            <form onSubmit={onSubmit}>
             <h1>Please Enter the details to Login</h1>
             <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name='username'
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
    <a href="/register" class="newaccount">Create New Account</a>
    <input type="submit" className="btn btn-primary" value="Login"/>

            </form>
     
    </div>
  );
}

export default Loginforms;