import React from "react";
import Header from "../../components/Header/Header";
import PageTitle from "../../components/PageTitle/PageTitle";

function App() {
  const actionButtonProps = {
    label: "Novo projeto",
    action: () => console.log("Cliquei em novo projeto"),
  };
  return (
    <>
      <Header />
      <PageTitle title="Projetos" actionButton={actionButtonProps} />
    </>
  );
}

export default App;
