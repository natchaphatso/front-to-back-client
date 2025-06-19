import { object, ref, string } from "yup";

//yup
export const registerSchema = object({
  email: string().email("Email incorrect").required("Please enter email"),
  name: string().min(2, "Name must be longer than 2 letters"),
  password: string().min(6, "Password must be longer than 6 letters"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password not match !"
  ),
});

export const loginSchema = object({
  email: string().email("Email incorrect").required("Please enter email"),
  password: string().min(6, "Password must be longer than 6 letters"),
});
