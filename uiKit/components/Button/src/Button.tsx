import { FunctionComponent, ReactNode } from "react";

export interface ButtonProps {
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large" | "2xl";
  onClick: Function;
  isDisable?: boolean;
  children: ReactNode | string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  type = "primary",
  size = "medium",
  onClick,
  isDisable,
  children,
  ...props
}) => {
  const buttonTypeCss = () => {
    switch (type) {
      case "primary":
        return "bg-blue-base text-white";
      case "secondary":
        return "bg-white border-lightgray-200 text-blue-base";
      default:
        return "";
    }
  };

  const buttonSizeCss = () => {
    switch (size) {
      case "large":
        return "px-8 py-4 text-lg";
      case "small":
        return "px-2 py-1 text-sm";
      case "2xl":
        return "px-8 py-4 text-font28";
      default:
        return "px-4 py-2 text-base";
    }
  };

  return (
    <button
      type="button"
      className={[
        "font-bold rounded border",
        buttonTypeCss(),
        buttonSizeCss(),
        isDisable ? "cursor-not-allowed" : "cursor-pointer",
      ].join(" ")}
      onClick={() => {
        if (!isDisable && onClick) {
          onClick();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
