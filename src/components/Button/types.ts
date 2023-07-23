import { ButtonHTMLAttributes } from "react";

type IBaseButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled" | "onClick" | "aria-expanded"
>;

type IRequiredBaseButtonProps = Required<
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "title" | "role">
>;

export type IButtonProps = IBaseButtonProps &
  IRequiredBaseButtonProps & {
    role: "submit" | "button" | "link";
    size?: "base" | "small";
    variant?: "transparent" | "none";
    shape?: "squared" | "full";
  };
