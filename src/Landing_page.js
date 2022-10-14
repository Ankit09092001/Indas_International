import React from "react";
import emailjs from "@emailjs/browser";
//import Landing_img from './landing.jpg';
import logo from "./PNG.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Landing_page() {
  //
  // function submit(){
  //    <Form>
  //       <
  //    </Form>
  // }
  //
  // const form = useRef();

  //   function contact(){

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jisrgpl",
        "template_2t40uzb",
        e.target,
        "HkERxA8hXwDv0GWpr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  //   return (
  //     <form >
  //       <label>Name</label>
  //       <input type="text" name="user_name" />
  //       <label>Email</label>
  //       <input type="email" name="user_email" />
  //       <label>Message</label>
  //       <textarea name="message" />
  //       <input type="submit" value="Send" />
  //     </form>
  //   );
  //    }

  return (
    <div>
      <div className="Landing">
        <img className="Logo" src={logo} alt="logo" />
        <h1>Coming Soon</h1>
        <h3 class="font_h3">We are getting ready for the Launch</h3>
        <p>
          We are working hard to give you a better experience.
          <br />
          We promise, it will be worth the wait!
        </p>

        <h3 class="font_h3">Get Notified When We Go Live</h3>
        <div className="icons">
          <a href="https://www.facebook.com/Indas-International-100617009318760/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/indasinternational/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/indas-international/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href = "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJqVwxQnznRfVBCNPhlqZjNFdRhMsntSVzRBfQSfXzgLLztplHKbMDfFwbJcdRqmMFGvMbq" target="_blank" rel="noreferrer">
          <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
        {/* <form action="response.html" method="get">
               <input type="email" autocomplete="on" placeholder="Enter e-mail" required />
               <input type="submit" value="Get Notified" />
            </form> */}
        <div className="formss">
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter E-mail"
                required
              />
            </Form.Group>
            <Button type="submit">Subscribe</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
