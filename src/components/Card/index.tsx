import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  id?: string;
  key?: number;
}

const Card = ({ children, className, id, key }: Props) => {
  return (
    <div key={key} id={id} className={className}>
      {children}
    </div>
  );
};

export default Card;
