type ButtonProps = {
  text: string
  variant?: "primary" | "secondary" | "danger"
  disabled?: boolean
  className?: string
}

const variants = {
  primary:
    "bg-[#235347] text-white hover:bg-[#2C6657]",
  secondary:
    "bg-[#35363A] text-white hover:bg-[#4b4d54]",
  danger:
    "bg-red-600 text-white hover:bg-red-700",
}

const Button = ({
  text,
  variant = "primary",
  disabled = false,
  className = "",
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`
        font-ui
        h-10
        px-12
        text-sm
        font-semibold
        font-poppins
        rounded-lg
        transition
        cursor-pointer
        disabled:opacity-60
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {text}
    </button>
  )
}

export default Button
