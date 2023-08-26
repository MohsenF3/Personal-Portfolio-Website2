import React from "react";

// =============== formik and yup and axios and Swal==========
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const FormValidation = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      terms: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      email: Yup.string()
        .email("email is invalid")
        .required("email is required"),
      message: Yup.string().required("message is required"),
      terms: Yup.boolean()
        .isTrue("terms of service must be checked")
        .required("terms of service must be checked"),
    }),
    onSubmit: (values, actions) => {
      axios
        .post(
          "https://sheet.best/api/sheets/d674c367-7d11-4d58-8da1-75a7aaaf210c",
          values,
          actions
        )
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Thanks For Your Email",
            showConfirmButton: true,
            timer: 3000,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops... Filed To Send Email",
            showConfirmButton: true,
            text: error.message,
          });
        });
      actions.setSubmitting(false);
      actions.resetForm();
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="contact-form">
        <div className="contact-input-box">
          <label
            className={`contact-lable ${
              formik.errors.name && formik.touched.name ? "error" : ""
            }`}
          >
            {formik.errors.name && formik.touched.name
              ? formik.errors.name
              : "your full name"}{" "}
            <span
              className={
                formik.errors.name && formik.touched.name ? "error" : ""
              }
            >
              *
            </span>
          </label>
          <input
            onBlur={formik.handleBlur}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            className="contact-input"
          />
        </div>
        <div className="contact-input-box">
          <label
            className={`contact-lable ${
              formik.errors.email && formik.touched.email ? "error" : ""
            }`}
          >
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : "your email address"}{" "}
            <span
              className={
                formik.errors.email && formik.touched.email ? "error" : ""
              }
            >
              *
            </span>
          </label>
          <input
            onBlur={formik.handleBlur}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            className="contact-input"
          />
        </div>
        <div className="contact-input-box">
          <label
            className={`contact-lable ${
              formik.errors.subject && formik.touched.subject ? "error" : ""
            }`}
          >
            {formik.errors.subject && formik.touched.subject
              ? formik.errors.subject
              : "your subject"}{" "}
            <span
              className={
                formik.errors.subject && formik.touched.subject ? "error" : ""
              }
            >
              *
            </span>
          </label>
          <input
            name="subject"
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            onChange={formik.handleChange}
            type="text"
            className="contact-input"
          />
        </div>
        <div className="contact-input-box">
          <label
            className={`contact-lable ${
              formik.errors.message && formik.touched.message ? "error" : ""
            }`}
          >
            {formik.errors.message && formik.touched.message
              ? formik.errors.message
              : "your message"}{" "}
            <span
              className={
                formik.errors.message && formik.touched.message ? "error" : ""
              }
            >
              *
            </span>
          </label>
          <textarea
            name="message"
            onBlur={formik.handleBlur}
            value={formik.values.message}
            onChange={formik.handleChange}
            className="contact-input contact-textarea"
          ></textarea>
        </div>
        <div className="contact-submit">
          <div className="">
            <input
              name="terms"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="checkbox"
              className="contact-checkbox"
              value={formik.values.terms}
            />
            <span
              className={`contact-terms ${
                formik.errors.terms && formik.touched.terms ? "error" : ""
              }`}
            >
              {formik.errors.terms && formik.touched.terms
                ? formik.errors.terms
                : "accepted the terms and conditions"}
            </span>
          </div>
          <button
            type="submit"
            className={`submit-btn btn ${
              !formik.dirty || formik.isSubmitting ? "disabled" : ""
            }`}
          >
            send message
          </button>
        </div>
      </form>
    </>
  );
};

export default FormValidation;
