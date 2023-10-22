import React from "react";

import "./index.css"

const question = [
   {text: "Why Parallel over Linkedin Jobs, or Zip Recruiter?"},
   {text: "What types of jobs are on Parallel?"},
   {text: "What does apply direct or get referred mean?"},
   {text: "Is Parallel free?"},
   {text: "Do I submit my resume or profile?"},
   {text: "Will more companies & jobs be added?"},
]

const QuestionsList = () => {
   return (
      <>
         {question.map( ({ text }) => (
            <div className="question__box">
               <div className="question__text">
                  { text }
               </div>
            </div>
         ))}
      </>
      
   )
}

export default QuestionsList;