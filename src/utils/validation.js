import * as yup from "yup";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validationSchema = yup.object().shape({
  name: yup
    .string("Only Latin Letters!")
    .matches(/^([^0-9]*)$/, "No numbers allowed!")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: yup
    .string()
    .matches(emailRegex, "Invalid email address")
    .required("Email is required"),
  phone: yup.number().min(9, "Too short!").required("Phone is required"),
  address: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Address is required"),
});
