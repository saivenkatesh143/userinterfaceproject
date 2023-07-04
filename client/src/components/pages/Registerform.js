import { fetchData} from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Registerform = () => {

  const navigate = useNavigate();



const [user,setuser] = useState({

    firstname:'',
    lastname:'',
    username:'',
    password:''
})

const {firstname,lastname,username,password} = user;

const onChange =(e) => setuser({...user,[e.target.name]: e.target.value})

const onSubmit =(e) => {

    e.preventDefault();
    

    fetchData("/user/register",
        
    {
      username,
      password
    },
     "POST")

   .then((data) => {
    if(!data.message){

      navigate("/profile")
    }

   })
.catch((error)=>{

  console.log(error)
})
}


    return(
        <div>
            <form onSubmit={onSubmit}>
         <div class="Registrationform">

         <img src="client/styles/images/image2.jpeg" class="img-rounded" alt="socialmedia"></img>
        
         <div className="mb-3">
          <label htmlFor="firstname" className="form-label">firstname</label>
          <input 
            type="text" 
            className="form-control" 
            id="firstname"
            name='firstname'
            onChange={onChange}
            value={firstname}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">lastname</label>
          <input 
            type="text" 
            className="form-control" 
            id="lastname"
            name='lastname'
            onChange={onChange}
            value={lastname}
            required
          />
        </div>
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
<nav>
<p>Login for Exisiting Account ? <a href="login">Login</a></p>
</nav>
<input type="submit" className="btn btn-primary" value="Register"/>
</div>
</form>
       
        </div>
    );



}


export default Registerform;