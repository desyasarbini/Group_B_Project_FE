import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  classNameChild?: string;
  id?: string;
}

const ListWrrapper = ({ children, className, id, classNameChild }: Props) => {
  return (
    <ul className={className} id={id}>
      {React.Children.map(children, (child, index) => {
        return (
          <li key={index} className={classNameChild}>
            {child}
          </li>
        );
      })}
    </ul>
  );
};

export default ListWrrapper;
