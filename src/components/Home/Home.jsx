import Categories from "../Categories/index.jsx";
import Search from "../SearchBlock/Search.jsx";
import Cards from "../Cards/index.jsx";
import { useState } from "react"

export default function Home() {
  return (
    <>
      <Search />
      <Categories />
      <Cards />
    </>
  );
}
