import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 
            style={{
    color :'#0F766E',
    backgroundColor :'#f1356d',
    padding : '8px',
    borderRadius: '9px',
    position:'absolute',
}}
            > Blog Navigation</h1>
            <div className="links">
                <Link to="/" 
                 >Home</Link>
                <Link to="/Create" 
                >New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;


// style={{
//     color :'white',
//     backgroundColor :'#f1356d',
//     padding : '8px',
//     borderRadius: '9px',
// }}






// width: 213px;
// height: 38px;
// left: 72px;
// top: 24px;

// font-family: Mulish;
// font-style: normal;
// font-weight: normal;
// font-size: 24px;
// line-height: 30px;
// display: flex;
// align-items: center;

// color: #0F766E;