import React,{ useState,useEffect} from 'react'
import axios from 'axios';
import Post from './components/Post';
import Pagination from './components/Pagination';

// import contactList from './components/contact-list/addContact/contactList'

const App = () => {
  const[posts,setPosts] = useState([]);
  let [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] =  useState(1);
  const [postsPerPage] = useState(3);

  useEffect(()=> {
    const fetchPosts = async ()=>{
      setLoading = true;
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setPosts(res.data);
      setLoading=false;
    }

    fetchPosts();
  },[]);
  // Getting current 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
  return (
   <> 
   <h1 className='text-center'>List App</h1>
    {/* <section className='contact-list'>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body d-flex p-3 align-item-center">
                <div className="col-md-2">
                  <p>Hellomet</p>
                </div>
                <div className="col-md-3">
                  <h4>Name</h4>
                  <span></span>
                </div>
                <div className="col-md-3">
                   <h4>CITY</h4>
                   <span>Mumbai</span>
                </div>
                <div className="col-md-2">
                  <h4>STATE</h4>
                  <span>Maharashtra</span>
                </div>
                <div className="col-md-3 ">
                  <button className='btn btn-success' >View details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     */}
    
   <Post posts={currentPosts} loading={loading}  />
   <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
   </>
  )
}

export default App