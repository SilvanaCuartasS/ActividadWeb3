import { useContext } from "react";
import { nameContext } from "../contexts/nameContext";
import Child from "./child";

const Pather = () => {
  const { name } = useContext(nameContext);

  return (
    <>
<p>
  I'm the ProfileChild of the Profile of{" "}
  <strong style={{ color: "#ff4d6d" }}>{name}</strong>
</p>
    <Child/>
    </>
  );
};

export default Pather;