import * as React from 'react';
import './Sidebar.css'
// import Menu from '@material-ui/core/Menu';
// import Button from '@material-ui/core/Button';


const SideBar = () => {
    
    return (
        <div>
            <div class="sidebar">
                <a class="closebtn" >&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            <div class="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
                 {/* <Button style={{
                     padding:'5px',
                     color : 'white',
                     fontSize : '15px',
                     left : '20px',
                     backgroundColor:'#000000',
                 }}>Click me</Button> */}
            </div>
            <div class="main">
                <h1>Sidebar</h1>
                {/* <p>This sidebar is of full height (100%) and always shown.</p>
                <p>Scroll down the page to see the result.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
                <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p> */}
            </div>
            <div id="main">
                <button class="openbtn" onclick={() => "openNav()"} onClick={() => console.log('You click me')}> Open Sidebar</button>
                <h2>Collapsed Sidebar</h2>
            </div>
            
        </div>
    )
}

export default SideBar
