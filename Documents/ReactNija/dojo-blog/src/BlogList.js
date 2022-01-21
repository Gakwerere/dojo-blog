import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title ,handleDelete}) => {//passing props by component argulement

    // const blogs = props.blogs;
    // const title = props.title; //passing props by creact
    return (
        <div className="blog-List">
            <h2>{title}</h2>
            {blogs.map((blog) =>(
              
                  <div className="blog-preview" key={blog.id}>
                      
                     <Link to ={`/blogs/${blog.id}`}>
                   <h2>{ blog.name }</h2>
                    <p>Written by<b> {blog.author}</b></p>
                    {/* <p>{blog.body}</p> */}
                    {/* <button onClick={() => handleDelete(blog.id)}
                            style={{
                                color :'white',
                                backgroundColor :'#f1356d',
                                padding : '8px',
                                borderRadius: '28px',}}
                    >Delete Blog</button> */}
                    </Link>
                </div>
               
            ))}

        </div>
    );
}
 
export default BlogList;