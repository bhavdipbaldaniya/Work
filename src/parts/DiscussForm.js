import React from "react";
import Fade from "react-reveal/Fade";
import * as emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "../elements/Form";
import Button from "../elements/Button";

export default function DiscussForm(props) {
  const { data, resetForm } = props;

  const submitEmail = () => {
    const { name, company, email, phone, projectIdea } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: "cyberwave",
      message: projectIdea,
    };

    if (
      name !== "" &&
      company !== "" &&
      email !== "" &&
      phone !== "" &&
      projectIdea !== ""
    ) {
      emailjs
        .send(
          "service_r8r5tib",
          "template_xo99nle",
          templateParams,
          "QYtErFkzduMYAdLR5"
        )
        .then(
          () => {
            toast.success("Success! We'll get back to you soon. Thank you!");
            resetForm();
          },
          (error) => {
            toast.error(error.text);
          }
        );
    } else {
      toast.error("Please fill out the form.");
    }
  };

  return (
    <div>
      <section className="flex flex-col container mx-auto mt-32 justify-center p-2">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Lets Discuss
          </h1>

          <p
            // className="font-light text-lg text-gray-400 text-center mb-12 "
            className="PleasefillouttheformTAXT">
            Please fill out the form below to discuss your project and we'll get
            back to you in less than 24 hours.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="MainDivFormContener "
            >
              <div className="MainDivForFormInput ">
                <Form
                  className='inputtagForm'
                  id="name"
                  name="name"
                  type="text"
                  value={data.name}
                  placeholder="Enter your name"
                  onChange={props.onChange}
                />
                <Form
                  id="company"
                  name="company"
                  type="text"
                  value={data.company}
                  placeholder="Enter your company name"
                  className='inputtagForm'
                  onChange={props.onChange}
                />
              </div>

              <div className="MainDivForFormInput">
                <Form
                  id="email"
                  name="email"
                  type="email"
                  value={data.email}
                  placeholder="Enter your email address"
                  className='inputtagForm'
                  onChange={props.onChange}
                />
                <Form
                  id="phone"
                  name="phone"
                  type="tel"
                  value={data.phone}
                  placeholder="Enter your contact number"
                  className='inputtagForm'
                  onChange={props.onChange}
                />
              </div>

              <div className="mx-auto " style={{ width: "100%" }}>
                <Form
                  id="projectIdea"
                  name="projectIdea"
                  type="textarea"
                  value={data.projectIdea}
                  placeholder="Explain about your project idea"
                  className="InputTextAriya"
                  onChange={props.onChange}
                />
              </div>
              <Button
                // className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200 focus:outline-none"
                className="submitEmail"
                type="button"
                onClick={submitEmail}
              >
                Submit
              </Button>
            </div>
          </div>
        </Fade>

        <ToastContainer />
      </section>
    </div>
  );
}
