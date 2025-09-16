import { useContext } from "react";
import { nameContext } from "../contexts/nameContext";
import { useState } from "react";

const Header = () => {
  const { setName, name } = useContext(nameContext);
  const [nameInput, setNameInput] = useState('');
  console.log(nameInput);
  

  const handleName = () => {
    setName(nameInput);
  };

  return (
    <>
    <h1>Welcome, {name}. I'm Header</h1>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button onClick={handleName}>Update</button>
    </>
  );
};

export default Header;
