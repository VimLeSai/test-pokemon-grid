import usePokemonList from "hooks/usePokemonList";
import { Pagination } from "react-pagination-bar";
import BounceLoader from "react-spinners/BounceLoader";
import Card from "../Card";

const PokemonListing = (props) => {
  const { isLoading, list, paginate, onPageChange } = usePokemonList(props);
  console.log(
    "🚀 ~ file: index.jsx ~ line 7 ~ PokemonListing ~ paginate",
    paginate
  );

  return (
    <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center ">
      <BounceLoader loading={isLoading} color="blue"></BounceLoader>
      <div className="grid grid-cols-4 gap-6 mt-6 grid-wrap">
        {list.map((item, index) => (
          <Card key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
      <Pagination
        totalItems={paginate.total}
        currentPage={paginate.page}
        itemsPerPage={paginate.limit}
        customClassNames={{
          rpbItemClassName:
            "rpb-item bg-gray-100 border border-gray-400 border-1",
          rpbItemClassNameActive: "rpb-item--active bg-blue-500",
          rpbRootClassName: "rpb-root my-12",
        }}
        onPageChange={onPageChange}
      />
    </main>
  );
};

export default PokemonListing;
