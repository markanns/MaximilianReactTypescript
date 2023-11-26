import { ReactNode } from "react";

type HeaderProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {children}
      <img {...image} />
    </header>
  );
}

export default Header;
