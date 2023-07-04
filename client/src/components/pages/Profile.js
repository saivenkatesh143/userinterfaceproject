import React from "react";
const profile = () => {


   
    return(
       

            <div>
                
      <h2>Welcome</h2>

      <form>
        <div>

        <div className="mb-3">
          <label htmlFor="postcreate" className="form-label">Create a New post</label>
          <textarea 
            type="text" 
            className="form-control" 
            id="postnotes"
            name='text'
            required
          />
        </div>
        </div>
        <input type="submit" className="btn btn-primary" value="Post"></input>
      </form>

      



        </div>
    );

        }



export default profile;