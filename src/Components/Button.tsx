import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: JSX.Element;
  loading?: boolean;
  onClick?: () => void;
}

const Button = ({ label, icon, loading, onClick }: ButtonProps) => {
  return (
    <button
      className={`${loading && "bg-gray-700 cursor-not-allowed"}`}
      disabled={loading}
      onClick={onClick}
    >
      {icon} {label}
    </button>
  );
};

export default Button;
