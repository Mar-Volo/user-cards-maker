import { Button } from "./Button.styled";

export const MainButton = ({ children, onClick, className }) => {
  return (
    <Button className={`button ${className}`} onClick={onClick}>
      {children}
    </Button>
  );
};