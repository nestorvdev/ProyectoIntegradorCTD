import Categories from "../Categories/index.jsx";
import SearchBlock from "../SearchBlock/SearchBlock";
import Cards from "../Cards/index.jsx";

export default function Home(props) {
  props.setActiveCreate(false)
  props.setActiveLogin(false)

  return (    
    <>
      <SearchBlock />
      <Categories />
      <Cards />
    </>
  );
}
