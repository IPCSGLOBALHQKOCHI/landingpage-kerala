import React from "react";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiArrowRight } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import vectorlogo from "../../../src/assets/vectors/IPCS GLOBAL logo-01 (1) 3 (1).png";
function ContactForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .matches(/^[A-Za-z\s]+$/, "Name must contain only letters"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be a valid number")
      .length(10, "Must be exactly 10 digits")
      .required("Mobile number is required"),
    email: Yup.string(),
    location: Yup.string()
      .required("Location is required"),
    course: Yup.string()
      .required("Course is required"),
  });

  // Initial form values
  const initialValues = {
    name: "",
    mobileNumber: "",
    email: "",
    location: "",
    course: "",
  };

  // Form submission handler
  const handleClick = (values) => {
    Swal.fire({
      title: "<h2 class='text-3xl font-bold text-black'>You’re In!</h2>",
      html: `
        <p class='text-black mb-4 text-lg'>
          We’ll contact you in just 20 minutes and deliver the Syllabus straight to your WhatsApp!!
        </p>
        <div class="flex justify-center space-x-4">
          <img src="../../../src/assets/images/09.whatsapp.png" alt="Vector 1" class="w-12 h-12" />
          <img src="../../../src/assets/images/call.png" alt="Vector 2" class="w-12 h-12" />
          <img src="../../../src/assets/images/web.png" alt="Vector 3" class="w-12 h-12" />
        </div>
      `,
      icon: "success",
      iconColor: "#008145",
      background: "#E0FFF1", 
      showCloseButton: true, 
      showConfirmButton: false,
      customClass: {
        popup: "rounded-xl px-6 py-6 relative", // Make popup relative for absolute positioning
        closeButton: "absolute top-1 right-1 border hover:text-black border-black text-black rounded-full", // Position the close button
      },
    });
    
    
    console.log("Form Data Submitted:", values);
  };

  return (
    <div className="container mx-auto flex justify-center items-center p-4 sm:p-6">
      {/* Form container */}
      <div
        className="text-white p-4 rounded-xl shadow-md w-full sm:w-[90%] lg:w-[520px] xl:w-[630px] relative py-7"
        style={{
          background:
            "radial-gradient(circle, rgba(0,60,40,1) 0%, rgba(0,44,26,1) 60%, rgba(0,32,20,1) 100%)",
        }}
      >
        <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={(values, { setSubmitting, resetForm }) => {
                 handleClick(values);
                 resetForm(); // Clear the form values
                 setSubmitting(false);
               }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base">
                  Name *
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded focus:outline-none text-black"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Mobile Number and Location fields on the same line */}
              <div className="flex flex-wrap sm:flex-nowrap sm:space-x-4 space-y-4 sm:space-y-0">
                {/* Mobile Number field */}
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="mobileNumber"
                    className="block text-sm sm:text-base"
                  >
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
                      className="w-full px-4 py-2 bg-white text-black border rounded-r focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="mobileNumber"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Location field */}
                <div className="w-full sm:w-1/2">
                  <label
                    htmlFor="location"
                    className="block text-sm sm:text-base"
                  >
                    Select Location *
                  </label>
                  <div className="relative">
                    <Field
                      as="select"
                      id="location"
                      name="location"
                      className="w-full px-4 py-2 rounded text-gray-500 focus:outline-none appearance-none"
                    >
                      <option value="" disabled>
                        Select your location
                      </option>
                      <option value="Kochi">Kochi</option>
                      <option value="Calicut">Calicut</option>
                      <option value="Trivandrum">Trivandrum</option>
                      <option value="Attingal">Attingal</option>
                      <option value="Kollam">Kollam</option>
                      <option value="Kannur">Kannur</option>
                      <option value="Thrissur">Thrissur</option>
                      <option value="Perinthalmana">Perinthalmana</option>
                      <option value="Kottayam">Kottayam</option>
                      <option value="Pathanimthitta">Pathanimthitta</option>
                      <option value="Palakkad">Palakkad</option>
                    </Field>
                    <span className="absolute text-black bottom-3 right-4 flex items-center pointer-events-none">
                      <FaCaretDown />
                    </span>
                  </div>
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              {/* Email and Course fields on the same line */}
              <div className="flex flex-wrap sm:flex-nowrap sm:space-x-4 space-y-4 sm:space-y-0">
                {/* Email field */}
                <div className="w-full">
                  <label htmlFor="email" className="block text-sm sm:text-base">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded focus:outline-none text-black"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Course field */}
                <div className="w-full relative">
                  <label
                    htmlFor="course"
                    className="block text-sm sm:text-base"
                  >
                    Select Course *
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
                      <option value="aianddm">Ai Integrated Digital Marketing</option>
                      <option value="industrialautomation">Industrial Automation</option>
                      <option value="softwaretesting">Software Testing</option>
                      <option value="pythonDs">Python and Data Science</option>
                      <option value="BMSCCTV">BMS & CCTV</option>
                      <option value="Ai">Artificial Intelligence</option>
                      <option value="embeddediot">Embedded & IoT</option>

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
                  className="flex items-center space-x-4 px-3 py-2  md:px-4 md:py-2 sm:px-3 sm:py-2 xl:px-4 rounded-full bg-yellow-400 text-black font-semibold text-base sm:text-xl"
                >
                  <span>Submit Now</span>
                  <div className="bg-white w-8 sm:w-10 h-8 sm:h-10 rounded-full flex justify-center items-center">
                    <FiArrowRight className="text-green-900 text-lg sm:text-xl" />
                  </div>
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Logo in the bottom-right corner */}
        <div className="absolute bottom-3 sm:bottom-0 right-5 sm:right-0">
          <img
            src={vectorlogo} // Replace with your logo path
            alt="Logo"
            className="w-28 h-20 sm:w-28 sm:h-28 opacity-10"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;