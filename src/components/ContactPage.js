import React from 'react';

function ContactPage() {
  return (
   
        <section>
             
      <h1>Contact Us</h1>
      {
        <form>
        <input type="text" placeholder="Name" name="name" required/>

        <input type="text" placeholder="Enter Email" name="email" required/>

        <label for="description" placeholder="Message">Description:</label>

        <textarea name="message" rows="10" cols="30"></textarea>
        </form>
        }
      
      <div class="contact-info">
  <h2>CONTACT DETAILS</h2>
  
    fated_trades@nz.com
    (09)828-0000
    New Zealand
    
    Nicole_ft@nz.com
    (09)630-2722
    
    Jayden_ft@nz.com
    (09)435-6869
    </div>

  

    </section>
  );
}

export default ContactPage;