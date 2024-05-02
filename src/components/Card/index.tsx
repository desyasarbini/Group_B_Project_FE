import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  id?: string | undefined;
}

const Card = ({ children, className, id }: Props) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

export default Card;
