import React, { useState, useEffect } from "react";
import Button from "../../components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Giovanni");

  useEffect(() => {
    setCount(1);
  }, []);

  //   useEffect(() => {
  //     setTimeout(() => setCount(count + 1), 600)
  //   });

  useEffect(() => {
    if (count % 2 === 0) {
      setName("Numero é par");
    } else {
      setName("Numero é ímpar");
    }
  }, [count]);

  useEffect(() => () => console.log("desmontar"));

  const onClickButton = () => {
    setName("Pellizzoni");
    // setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <p>{name}</p>
      <Button onClick={onClickButton} />
    </>
  );
}

export default App;
