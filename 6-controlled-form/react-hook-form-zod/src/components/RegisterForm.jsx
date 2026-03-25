import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../schemas/registerSchema"

function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
    alert("Registration successful")
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-4"
    >

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Name
        </label>

        <input
          {...register("name")}
          className="rounded border px-3 py-2"
        />

        {errors.name && (
          <p className="text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Email
        </label>

        <input
          {...register("email")}
          className="rounded border px-3 py-2"
        />

        {errors.email && (
          <p className="text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          {...register("password")}
          className="rounded border px-3 py-2"
        />

        {errors.password && (
          <p className="text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded bg-blue-600 py-2 text-white"
      >
        Register
      </button>

    </form>
  )
}

export default RegisterForm