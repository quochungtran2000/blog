import { DarkModeButtonS } from "./Button.styled";

interface ButtonProps {
  theme: string;
  onClick?(e: any): void;
}

const Button = (props: ButtonProps) => {
  const isLight = props.theme === "light";
  return <DarkModeButtonS onClick={props.onClick} isLight={isLight} />;
};

export default Button;
