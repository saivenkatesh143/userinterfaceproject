const Registerform = () => {
    return(
        <div>
         <div class="Registrationform">

         <img src="client/styles/images/socialmediaphoto.jpeg" class="img-rounded" alt="socialmedia"></img>
        
<label for="fname">First Name</label>
<input type="text" name="fname" id="fname" required></input>
<label for="lname">Last Name</label>
<input type="text" name="lname" id="lname" required></input>
<label for="emailid">Email</label>
<input type="email" name="emailid" id="emailid" required></input>
<label for="pwd">Password</label>
<input type="password" name="pwd" id="pwd"></input>
<nav>
<p>Login for Exisiting Account ? <a href="login.html">Login</a></p>
</nav>
<input type="submit" class="submit-button" value="Register"></input>
</div>
<script type="module" src="scripts/main.js"></script>
<script type="module" src="scripts/user.js"></script>
       
        </div>
    );



}


export default Registerform;