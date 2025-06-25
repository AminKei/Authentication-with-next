import React from "react";
import styles from "../../styles/Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  width?: number;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  width,
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <button
      style={{ width: width }}
      className={`${styles.button} ${isLoading ? styles.loading : ""}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className={styles.spinner}></span>
          در حال پردازش...
        </>
      ) : (
        children
      )}
    </button>
  );
};
