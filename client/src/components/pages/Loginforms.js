const Loginforms = () => {
    return(
        <div>
            <label for="email">User Name</label>
    <input type="email"placeholder="Enter the user name" name="email" id="emailid" required></input>
    <label for="Password">Password</label>
    <input type="password" placeholder="Enter the password"name="password" id="pwd" required></input>
    <a href="Registerform.js" class="newaccount">Create New Account</a>
   <input type="submit" id="btn-users" class="submit-button" value="Login"></input>

            
        </div>
    );



}


export default Loginforms;