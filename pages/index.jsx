import { fetchPokemonList } from "api/pokemon";
import PokemonListing from "components/Listing";
import Wrapper from "shared/layout/Wrapper";

const Home = (props) => {
  return (
    <Wrapper>
      <PokemonListing list={props.list} />
    </Wrapper>
  );
};

export default Home;

export async function getServerSideProps() {
  const list = await fetchPokemonList();
  return { props: { list } };
}
