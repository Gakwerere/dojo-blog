import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const [input, setInput] = useState(45)

    const changeFormView = () => {
          setInput(100 )
    }

    const {data : blogs ,isPanding , error } = useFetch('http://localhost:8000/blogs'); 
    //  https://jsonplaceholder.typicode.com/users
    
    const [Name, setName] = useState('Mario');
    const [Age, setAge] = useState(25)
    const handleClick = () =>{
        setName('Luc');
        setAge(26);
        setInput(false)
    }          //data replaced  by db.json
    // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    // { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  
    //delete blog
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //          setBlogs(newBlogs );
    //         } 
    // console.log(blogs)
    return (
        <div className="Home">
             {error &&  <div>{error}</div>}
             {isPanding && (<div><h2>Looding ....</h2></div>)}
          { blogs && <BlogList blogs={blogs} title="Our Blogs"  />} 
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author ==='Luc')} title="Luc is Blogs"/> */}
                       {/* {click and change}  */}
            <h1 className="content">About study</h1>
            <p className="content">{Name} is {Age} year old</p>
            <button onClick={handleClick} style={{
                    color :'white',
                    backgroundColor :'#f1356d',
                    padding : '8px',
                    borderRadius: '8px',
                }}>Click me</button>

                <div>
                    <button 
                    style={{
                        color :'white',
                        backgroundColor :'#f1356d',
                        padding : '8px',
                        borderRadius: '8px',
                    }}
                    onClick={changeFormView}> new</button>
                    {input && (<div><label>your Name</label> <input type="text" placeholder="your first Name" value={input} /></div>)}
                </div>
        </div>
    );
}
 
export default Home
