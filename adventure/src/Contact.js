import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3dl9dxt', 'template_q2gbf5r', form.current, 'user_0OuMkqZqQp4wXDJFkT7gG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className='container-fluid lggg'>
<div className="col-md-6">
  </div>
      <div className="my-0">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form ref={form}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                   FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                  name="user-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                   Mobile Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Mobile Number"
                  name="user-number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                   Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Email"
                  name="user-email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Type Your Message Below
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name='message'
                ></textarea>
              </div>
              <div className="col-12">
    <button className="btn btn-outline-success" type="submit" onClick={sendEmail}>Submit form</button>
  </div>
            </form>
          </div>
        </div>
    </div>
      </div>
    </>
  );
};

export default Contact;
