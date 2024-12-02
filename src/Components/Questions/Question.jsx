import React, { useState } from "react";
import dropDown from "/assets/Vector (8).png"

function QuestionSection() {
  const leftQuestions = [
    { question: "How long do the courses take?", answer: "We offer extensive 4-month and 6-month programs designed to empower individuals for successful futures." },
    { question: "What qualifications do I need to enroll?", answer: "Basic qualifications or relevant experience depending on the course." },
    { question: "How much do the courses cost?", answer: "The costs vary based on the program. Please check the specific course page for details." },
    { question: "Do you provide study materials?", answer: "Yes, we provide comprehensive study materials for all courses." },
    { question: "How much do the courses cost?", answer: "The costs vary based on the program. Please check the specific course page for details." },
    { question: "Do you provide study materials?", answer: "Yes, we provide comprehensive study materials for all courses." },
  ];

  const rightQuestions = [
    { question: "Is the certification recognized?", answer: "Yes, our certifications are widely recognized and valued by employers." },
    { question: "Can international students enroll?", answer: "Absolutely! Our programs are open to students worldwide." },
    { question: "How can I register for a course?", answer: "You can register online through our website in a few easy steps." },
    { question: "How do you assist with job placements?", answer: "We offer placement assistance and guidance to help you land your dream job." },
    { question: "How can I register for a course?", answer: "You can register online through our website in a few easy steps." },
    { question: "How do you assist with job placements?", answer: "We offer placement assistance and guidance to help you land your dream job." }
  ];

  // State to track open status for the left and right dropdown sections
  const [leftOpenStates, setLeftOpenStates] = useState(Array(leftQuestions.length).fill(false));
  const [rightOpenStates, setRightOpenStates] = useState(Array(rightQuestions.length).fill(false));

  // Toggle function for individual dropdowns in each section
  const toggleLeftDropdown = (index) => {
    const newStates = [...leftOpenStates];
    newStates[index] = !newStates[index];
    setLeftOpenStates(newStates);
  };

  const toggleRightDropdown = (index) => {
    const newStates = [...rightOpenStates];
    newStates[index] = !newStates[index];
    setRightOpenStates(newStates);
  };

  return (
    <div className=" py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          {leftQuestions.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg mt-4 ml-10 shadow-md">
              <button
                onClick={() => toggleLeftDropdown(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span
                  className={`text-xl transform transition-transform ${
                    leftOpenStates[index] ? "rotate-180" : ""
                  }`}
                >
                  <span className="inline-flex justify-center items-center">
<img
                 src={dropDown}
                 alt="dropdown"
                 className="w-[17px] h-[11px]"
               />
                  </span>
                 
                </span>
              </button>
              {leftOpenStates[index] && (
                <p className="mt-2 text-base text-gray-800 transition-all duration-300 ease-in-out">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div>
          {rightQuestions.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg mt-4 mr-10 shadow-md">
              <button
                onClick={() => toggleRightDropdown(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span
                  className={`text-xl transform transition-transform ${
                    rightOpenStates[index] ? "rotate-180" : ""
                  }`}
                >
                   <span className="inline-flex justify-center items-center">
<img
                 src={dropDown}
                 alt="dropdown"
                 className="w-[17px] h-[11px]"/>
                  </span>
                </span>
              </button>
              {rightOpenStates[index] && (
                <p className="mt-2 text-base text-gray-800 transition-all duration-300 ease-in-out">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionSection;
