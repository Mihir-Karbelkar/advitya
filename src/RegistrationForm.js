import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
const App = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    <div className="name">
      <Field type="text" name="name" placeholder="name" />
    </div>{" "}
    <div className="email">
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </div>
    <div className="password">
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="Password" />
    </div>{" "}
    <div className="confirmPassword">
      {touched.confirmPassword && errors.confirmPassword && (
        <p>{errors.confirmPassword}</p>
      )}

      <Field
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
    </div>
    <div className="gender">
      {touched.male && errors.male && <p>{errors.male}</p>}

      <label>Gender</label>
      <label>
        <Field type="checkbox" name="male" checked={values.male} />
        Male
      </label>
      <label>
        <Field type="checkbox" name="female" checked={values.female} />
        Female
      </label>
      <label>
        <Field type="checkbox" name="na" checked={values.na} />
        refer not to say
      </label>
    </div>
    <div className="accommodation">
      <label>
        <Field type="checkbox" name="accommodation" />
        Accommodation{" "}
      </label>
    </div>
    <div className="contact">
      {touched.contact && errors.password && <p>{errors.contact}</p>}

      <Field type="text" name="contact" placeholder="Contact" />
    </div>
    <button type="submit">Submit</button>
  </Form>
);

export const FormikForm = withFormik({
  mapPropsToValues({
    name,
    email,
    password,
    confirmPassword,
    male,
    female,
    na,
    college,
    accommodation,
    contact
  }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
      male: false,
      female: false,
      na: false,
      college: college || "",
      accommodation: accommodation || "",
      contact: contact || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
    confirmPassword: Yup.string().test(
      "match",
      "Passwords do not match",
      function(confirmPassword) {
        return confirmPassword == this.parent.password;
      }
    ),
    male: Yup.boolean().test("check", "One should be selected", function(male) {
      if (
        (male && !this.parent.female && !this.parent.na) ||
        (!male && this.parent.female && !this.parent.na) ||
        (!male && !this.parent.female && this.parent.na)
      )
        return true;
      else return false;
    }),

    college: Yup.string().required("College is required"),
    contact: Yup.number(10).required("Enter a valid phone number")
  }),
  handleSubmit(values) {}
})(App);

/*
email
name
gender
college
accommodation checkbox
contact

*/
