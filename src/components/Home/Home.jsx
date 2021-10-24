import Categories from "../Categories/index.jsx";
import SearchBlock from "../SearchBlock/SearchBlock";
import Cards from "../Cards/index.jsx";
import { useState } from "react"

export default function Home() {
  return (
    <>
      <SearchBlock />
      <Categories />
      <Cards />
    </>
  );
}
