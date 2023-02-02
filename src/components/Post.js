import React from 'react'

const Post = ({posts,loading}) => {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
     
    <ul className='list-group mb-4'>
        {posts.map(post =>(
            <li key={post.id}>
             <section className='contact-list'>
             <div className="container">
               <div className="row">
                 <div className="col-md-12">
                   <div className="card">
                     <div className="card-body d-flex p-3 align-item-center">
                       <div className="col-md-2">
                        <h4>No.</h4>
                         <p>{post.id}</p>
                       </div>
                       <div className="col-md-3">
                         <h4>Name</h4>
                         <span>{post.name}</span>
                       </div>
                       <div className="col-md-4">
                          <h4>Username</h4>
                          <span>{post.username}</span>
                       </div>
                       <div className="col-md-2">
                         <h4>Email</h4>
                         <span>{post.email}</span>
                       </div>
                       <div className="col-md-3 ">
                         <button className='btn btn-success'>
                            View Details
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
            
           </section>
           </li>
           
        ))}
    </ul>
    
  )
}

export default Post