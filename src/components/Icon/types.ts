import { ReactNode } from "react";

export interface IIconProps {
  icon: ReactNode;
  size?: "small" | "base" | "big";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "inverted"
    | "info"
    | "error"
    | "success"
    | "warning";
}
