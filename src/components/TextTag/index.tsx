import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: string;
  className: string;
}

const TextTag = ({ children, type, className }: Props) => {
  switch (type) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "p":
      return <p className={className}>{children}</p>;
  }
};

export default TextTag;
