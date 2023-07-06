import { useState,useEffect  } from "react";
import { fetchData} from "../../main.js";



const Profile = () => {
  const [post, setPost] = useState({
    postcontent: "",
  });
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const loggedInUsername = user.username;
    setUsername(loggedInUsername);
  }, []);

  const {  postcontent } = post;
    
      const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value })

      const onSubmit = (e) => {
        e.preventDefault();
        let user = localStorage.getItem('user');
        console.log(user)
        let parseUser = JSON.parse(user);
        let userId = parseUser.username;
        fetchData("/post/createpost",
          {
            postcontent,
            userId
          },
          "POST")
          .then((data) => {
            if (data) {
              console.log(data);
              
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }



   
    return(
       

            <div>
                
      
      <h2>Welcome, {username}</h2>

      <form>
        <div>

        <div className="mb-3">
        <label htmlFor="title" className="form-label">title</label>
          <textarea 
            type="text" 
            className="form-control" 
            id="title"
            name='title'
            onChange={onChange}
            required
            />
          <label htmlFor="postcontent" className="form-label">Newpost</label>
          <textarea 
            type="text" 
            className="form-control" 
            id="postcontent"
            name='postcontent'
            onChange={onChange}
            required
          />
        </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Post" onClick={onSubmit}></input>
      </form>

      



        </div>
    );

        }



export default Profile;