// Button.js
import React from "react";
import "../../assets/scss/components/Button.scss";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "left",
  disabled = false,
  loading = false,
  className = "",
  onClick,
  type = "button",
  fullWidth = false,
  ...props
}) => {
  const baseClass = "custom-button";
  const classes = [
    baseClass,
    `${baseClass}--${variant}`,
    `${baseClass}--${size}`,
    fullWidth ? `${baseClass}--full-width` : "",
    disabled ? `${baseClass}--disabled` : "",
    loading ? `${baseClass}--loading` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span
        className={`${baseClass}__icon ${baseClass}__icon--${iconPosition}`}
      >
        {icon}
      </span>
    );
  };

  const renderSpinner = () => (
    <span className={`${baseClass}__spinner`}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </span>
  );

  return (
    <button
      type={type}
      className={classes}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && renderSpinner()}
      {iconPosition === "left" && renderIcon()}
      <span className={`${baseClass}__text`}>{children}</span>
      {iconPosition === "right" && renderIcon()}
    </button>
  );
};

export default Button;
