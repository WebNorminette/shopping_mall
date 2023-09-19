import styles from "./Button.module.css";
interface ButtonProps {
  content: string;
  type?: string;
  onClick?: any;
  disabled?: boolean;
  isUseHover?: boolean;
}

export default function Button({
  content,
  onClick,
  disabled = false,
  isUseHover = false,
  type = "black",
}: ButtonProps) {
  return (
    <button
      className={`${styles.wrapper} ${type === "black" ? styles.black : styles.white} ${
        isUseHover && styles.useHover
      } ${disabled && styles.disabled}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
