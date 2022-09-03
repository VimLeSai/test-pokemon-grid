import { fetchPokemonDetails } from "api/pokemon";
import PokemonDetail from "components/Detail";
import Wrapper from "shared/layout/Wrapper";

const Pokemon = (props) => {
  return (
    <Wrapper noSearch>
      <PokemonDetail data={props.data} />
    </Wrapper>
  );
};

export default Pokemon;

export async function getServerSideProps(ctx) {
  let temp = ctx.req.url.split("/");
  let id = temp[temp.length - 1];
  const data = await fetchPokemonDetails(id);
  return { props: { data } };
}
