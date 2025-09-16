import { useContext } from "react";
import { nameContext } from "../contexts/nameContext";

const Footer = () => {
  const { name } = useContext(nameContext);

  return (
    <>
    <h1>You're on the Footer, {name}</h1>
    </>
  );
};

export default Footer;