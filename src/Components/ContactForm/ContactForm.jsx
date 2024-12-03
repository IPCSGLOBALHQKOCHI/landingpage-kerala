import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {FiArrowRight} from "react-icons/fi"
import { FaCaretDown } from "react-icons/fa";
import vectorlogo from "../../../src/assets/vectors/IPCS GLOBAL logo-01 (1) 3 (1).png"

function ContactForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be a valid number")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits")
      .required("Mobile number is required"),
    email: Yup.string(),
    course: Yup.string(),
  });

  // Initial form values
  const initialValues = {
    name: "",
    mobileNumber: "",
    email: "",
    course: "",
  };

  // Form submission handler
  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
<div className="container flex ml-20 w-[520px] h-[350px] items-center relative">
  {/* Form container */}
  <div
    className="text-white p-4 rounded-xl shadow-md w-full relative py-7 "
    style={{
      background:
        "radial-gradient(circle, rgba(0,60,40,1) 0%, rgba(0,44,26,1) 60%, rgba(0,32,20,1) 100%)",
    }}
  >
    <Formik
  initialValues={initialValues}
  validationSchema={validationSchema}
  onSubmit={onSubmit}
>
  {({ isSubmitting }) => (
    <Form className="space-y-4">
      {/* Name field */}
      <div>
        <label htmlFor="name" className="block">
          Name *
        </label>
        <Field
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded focus:outline-none"
        />
        <ErrorMessage
          name="name"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Mobile Number field */}
      <div>
        <label htmlFor="mobileNumber" className="block">
          Mobile Number *
        </label>
        <div className="flex">
          <span className="flex items-center px-3 bg-gray-200 border text-black border-r-0 rounded-l">
            +91
          </span>
          <Field
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter your number"
            className="w-full px-4 py-2 focus:outline-none rounded-r"
          />
        </div>
        <ErrorMessage
          name="mobileNumber"
          component="div"
          className="text-red-500 text-sm"
        />
      </div>

      {/* Email and Course fields on the same line */}
      <div className="flex space-x-4">
        {/* Email field */}
        <div className="w-full">
          <label htmlFor="email" className="block">
            Email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded focus:outline-none"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
        </div>

        {/* Course field */}
        <div className="w-full relative">
  <label htmlFor="course" className="block">
    Select Course
  </label>
  <div className="relative">
    <Field
      as="select"
      id="course"
      name="course"
      className="w-full px-4 py-2 rounded text-gray-500 focus:outline-none appearance-none"
    >
      <option value="" disabled>
        Select your course
      </option>
      <option value="engineering">Engineering</option>
      <option value="medical">Medical</option>
      <option value="law">Law</option>
    </Field>
    <span className="absolute text-black bottom-3 right-4 flex items-center pointer-events-none">
      <FaCaretDown />
    </span>
  </div>
  <ErrorMessage
    name="course"
    component="div"
    className="text-red-500 text-sm"
  />
</div>



      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center space-x-4 pr-2 rounded-full py-[5px] pl-10 bg-yellow-400 text-black font-semibold text-xl"
        >
          <span>Submit Now</span>
          <div className="bg-white w-10 h-10 rounded-full">
            <FiArrowRight className="w-7 h-8 ml-2 mt-1 text-green-900" />
          </div>
        </button>
      </div>
    </Form>
  )}
</Formik>


    {/* Logo in the bottom-right corner */}
    <div className="absolute -bottom-3 -right-5">
      <img
        src={vectorlogo} // Replace with your logo path
        alt="Logo"
        className="w-52 h-52 opacity-10"
      />
    </div>
  </div>
</div>

  );
}

export default ContactForm;
