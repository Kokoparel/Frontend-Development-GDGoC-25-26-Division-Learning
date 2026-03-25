function FormInput({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded border px-3 py-2"
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormInput