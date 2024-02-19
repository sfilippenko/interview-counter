import { ButtonHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  console.log("button render", props.children);
  return <button {...props} />;
};
