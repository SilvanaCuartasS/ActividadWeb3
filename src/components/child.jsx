import { useContext } from "react";
import { nameContext } from "../contexts/nameContext";

const Child = () => {
  const { name } = useContext(nameContext);

  return (
    <>
<p>
  I'm the ProfileGrandChild of Profile, that means I'm the child of ProfileChild{" "}
  <strong style={{ color: "red" }}>{name}</strong>
</p>

    </>
  );
};

export default Child;