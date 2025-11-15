export const quizData = {
  title: "JavaScript Fundamentals Quiz",
  description: "Test your knowledge of JavaScript basics and advanced concepts",
  questions: [
    {
      id: 1,
      question: "What is the output of: console.log(typeof null)?",
      options: [
        "null",
        "object",
        "undefined",
        "number"
      ],
      correctAnswer: 1,
      explanation: "In JavaScript, typeof null returns 'object' due to a historical bug."
    },
    {
      id: 2,
      question: "Which method is used to create a new array with all sub-array elements concatenated?",
      options: [
        "concat()",
        "join()",
        "flat()",
        "merge()"
      ],
      correctAnswer: 2,
      explanation: "The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth."
    },
    {
      id: 3,
      question: "What does the 'use strict' directive do?",
      options: [
        "Enables strict mode which helps catch common coding errors",
        "Makes JavaScript run faster",
        "Enables experimental features",
        "Forces asynchronous execution"
      ],
      correctAnswer: 0,
      explanation: "Strict mode makes several changes to normal JavaScript semantics, eliminating some silent errors and preventing certain actions."
    },
    {
      id: 4,
      question: "Which of these is a valid way to create a Promise?",
      options: [
        "new Promise(function(resolve, reject) {})",
        "Promise.create(function() {})",
        "Promise.new(function() {})",
        "createPromise(function() {})"
      ],
      correctAnswer: 0,
      explanation: "Promises are created using the Promise constructor with new Promise(executor)."
    },
    {
      id: 5,
      question: "What is the purpose of the Symbol data type?",
      options: [
        "To create unique identifiers",
        "To represent monetary values",
        "To handle large integers",
        "To store binary data"
      ],
      correctAnswer: 0,
      explanation: "Symbols are unique and immutable primitive values that can be used as object property keys."
    }
  ]
};