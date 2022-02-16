import { useHistory ,useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog , error , isPanding} = useFetch('http://localhost:8000/blogs/' + id); //http://localhost:8000/blogs https://jsonplaceholder.typicode.com/users/
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id , {  // https://jsonplaceholder.typicode.com/users/
            method : 'DELETE'
        }).then(() =>{
            history.push('/');
        })
    };
    return ( 
        <div className="blog-details">
             {isPanding && <div>Looding ....</div>}
            {error && <div> { error } </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}> delete </button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;