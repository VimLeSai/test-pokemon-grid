import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "api/pokemon";
import { GlobalContext } from "context/index";
import { useCallback, useContext, useEffect } from "react";

const usePokemonList = (props) => {
  const { keyword, paginate, setPaginate } = useContext(GlobalContext);
  const { isLoading, data = {} } = useQuery(
    ["pokemonList", { keyword, offset: paginate.offset }],
    () =>
      fetchPokemonList({
        keyword,
        offset: paginate.offset,
      }),
    {
      initialData: props.list,
    }
  );

  const onPageChange = useCallback((page) => {
    setPaginate((prev) => ({
      ...prev,
      offset: (page - 1 || 0) * prev.limit,
      page,
    }));
  }, []);

  useEffect(() => {
    setPaginate((prev) => ({
      ...prev,
      total: data.count,
    }));
    console.log({ data });
  }, [data.counts]);

  return {
    isLoading,
    list: data.results,
    paginate,
    onPageChange,
  };
};

export default usePokemonList;
