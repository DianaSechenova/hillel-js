"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const elementTarget = event.target;

    const formData = new FormData(elementTarget);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
      nameValidation(value, key);
      textareaValidation(value, key);
      phoneValidation(value, key);
      emailValidation(value, key);
    });

    function nameValidation(value, key) {
      const errorNameEl = elementTarget.querySelector(".js--error_name");
      if (key === "name") {
        if (value) {
          errorNameEl.classList.remove("visible");
        } else {
          errorNameEl.classList.add("visible");
        }
      }
    }

    function textareaValidation(value, key) {
      const errorTextareaEl = elementTarget.querySelector(
        ".js--error_textarea"
      );
      if (key === "message") {
        const regex = /^.{5,}$/;
        const isValid = regex.test(value);

        if (isValid) {
          errorTextareaEl.classList.remove("visible");
        } else {
          errorTextareaEl.classList.add("visible");
        }
      }
    }

    function phoneValidation(value, key) {
      const errorTextareaEl = elementTarget.querySelector(".js--error_phone");

      if (key === "tel") {
        const regex = /^\+380\d{9}$/;
        const isValid = regex.test(value);

        if (value && isValid) {
          errorTextareaEl.classList.remove("visible");
        } else {
          errorTextareaEl.classList.add("visible");
        }
      }
    }

    function emailValidation(value, key) {
      const errorTextareaEl = elementTarget.querySelector(".js--error_email");

      if (key === "email") {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = regex.test(value);

        if (value && isValid) {
          errorTextareaEl.classList.remove("visible");
        } else {
          errorTextareaEl.classList.add("visible");
        }
      }
    }
  });
});
