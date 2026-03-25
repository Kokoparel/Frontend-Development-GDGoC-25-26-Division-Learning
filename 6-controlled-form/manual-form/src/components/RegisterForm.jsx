import { useState } from "react";
import FormInput from "./FormInput";
import { validateForm } from "../utils/validateForm";

function RegisterForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", values);
    alert("Registration successful");

    setValues({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-4"
      >
        <FormInput
          label="Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button type="submit" className="rounded bg-blue-600 py-2 text-white">
          Register
        </button>
      </form>

      {/* Live Preview */}

      <div className="w-full max-w-md rounded-lg border bg-white p-4 shadow">
        <h2 className="mb-2 text-lg font-semibold">Live Preview</h2>
        <p>
          <strong>Name:</strong> {values.name || "-"}
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
