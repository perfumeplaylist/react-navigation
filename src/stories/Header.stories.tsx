import Header from "@/components/Header/Header.tsx";

export default {
  title: "Component/Header",
};

const Link=()=>{
  return (
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
  )
}

export const Default = () => {
  
  return (
    <>
    <Link />
    <Header>
      <button>
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <h1>Header</h1>
    </Header>
    </>
  );
};
