import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../image/brand-logo.jpg';

function Navigation() {
  return (
    <body>
        
        <div class="nav">
            <div class="logo">
    <h1>FATED TRADES</h1>
    <h3>BUY & SELL</h3>



<div class="image">
<img src={brandLogo} class="image" alt="logo" />

</div>
</div>
</div>

<div class="menu">
      <ul>
        <li>
          <Link to="Sell.js">SELL</Link>
        </li>
        <li>
          <Link to="/ContactPage.js">CONTACT</Link>
        </li>
        <li>
          <Link to="/AboutPage">About</Link>
        </li>
        <li>
          <Link to="Register">REGISTER</Link>
          </li> 
          <button class="open-button" onclick="openForm()">LOGIN</button>
        <div class="form-popup" id="myForm">
          <form action="/action_page.php" class="form-container">
            <h1>Login</h1>
        
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
        
            

            <button type="submit" class="btn">Login</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
          </form>
        </div>
        <script>
        function openForm() {
          document.getElementById("myForm").style.display = "block"};
        
        
        function closeForm() {
          document.getElementById("myForm").style.display = "none"};
        
        </script>
      </ul>
</div>

<div class="search">
     
      <input class="mySearch"  type="text" placeholder="Search.." 
      id="mySearch" onkeyup="myFunction()" title="Type in a category"></input>
<ul id="myMenu">
        <li>Sports</li>
        <li>Furniture</li>
        <li>Clothing</li>
        <li>Cars</li>
        <li>Electronics</li>
        <li>Gaming</li>
        <li>Toys</li>
        <li>Jewellery</li>
        <li>SALE</li>
      </ul>

</div>


<footer><link to="/Footer"></link></footer>
    </body>

   
  );
}

export default Navigation;
