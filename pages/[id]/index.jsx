import { fetchPokemonDetails, fetchPokemonList } from "api/pokemon";
import PokemonDetail from "components/Detail";
import Wrapper from "shared/layout/Wrapper";

const Pokemon = () => {
  return (
    <Wrapper noSearch>
      <PokemonDetail />
    </Wrapper>
  );
};

export default Pokemon;

export async function getServerSideProps(ctx) {
  console.log("ctx", ctx.req.params);
  let temp = ctx.req.url.split("/");
  let id = temp[temp.length - 1];
  const data = await fetchPokemonDetails(id);
  return { props: { data } };
}
