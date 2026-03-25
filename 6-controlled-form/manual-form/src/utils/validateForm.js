export function validateForm(values) {
  const errors = {}

  if (!values.name) {
    errors.name = "Name is required"
  }

  if (!values.email) {
    errors.email = "Email is required"
  } else if (!values.email.includes("@")) {
    errors.email = "Invalid email format"
  }

  if (!values.password) {
    errors.password = "Password is required"
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters"
  }

  return errors
}