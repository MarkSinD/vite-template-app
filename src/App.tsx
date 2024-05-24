import "./App.css";
import { useGetPokemonByNameQuery } from "./pokemon";

const App = () => {
  const { data } = useGetPokemonByNameQuery("ditto");

  return (
    <>
      <span>{data?.name}</span>
      <img alt="pic" src={data?.sprites?.front_default} />
    </>
  );
};

export default App;
