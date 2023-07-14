import React, { useState } from 'react';
import Card from '@mui/material/Card';
const Posts = ({ posts, loading }) => {
  const[show, setShow] = useState(true);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  



  return (
    <Card className = "App" style={{backgroundColor:"#D3D3D3",paddingTop:"2%",paddingLeft:"2%",paddingRight:"2%",paddingBottom:"2%",marginBottom:"15px"}}>
    
    {posts.map(post => (
       
       <Card key = { post.id } className='list-group-item' style={{backgroundColor:"white",paddingTop:"2%",paddingBottom:"2%",marginTop:"15px",marginBottom:"15px"}} >
       
       <table class="table" style={{marginTop:"15px",marginBottom:"15px",marginLeft:"15px",marginRight:"15px"}}>
                 
        
       <th scope="col">User_Name &nbsp;&nbsp; 
                   <p>{ post.username }</p></th>
       <th scope="col">Full_Name &nbsp;&nbsp;
                    <p>{ post.name }</p></th>
       <th scope="col">User_Email &nbsp;&nbsp; 
                   <p>{ post.email }  </p></th>
  
        

{show && <p>

  <div className = "App">
            {
                posts.map((post) => ( 
                <ol key = { post.id } >
                  
                    User_Name: { post.username }
                    
                    </ol>
                ))
            }
        </div>
  </p>}
<button type= "button" onClick={() => setShow(!show)}>
  {show === true ? 'Hide Details' :'Show Details'}
</button>

        

        
     
                  
                    </table>
       </Card>
        
     ))}
    </Card>

  );
};

export default Posts;
