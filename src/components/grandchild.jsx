import { useContext } from "react";
import { nameContext } from "../contexts/nameContext";
import Child from "./child";
import Pather from "./pather";

const GrandChild = () => {
  const { name } = useContext(nameContext);

  return (
    <>
<p>
  I'm Profile <strong style={{ color: "#4dfcffff" }}>{name}</strong>
</p>

    <Pather/>
    </>
  );
};

export default GrandChild;