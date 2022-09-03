import { fetchPokemonList } from "api/pokemon";
import { GlobalContext } from "context/index";
import { useCallback, useContext, useState, useEffect, useMemo } from "react";

const usePokemonList = (props) => {
  const { keyword, paginate, setPaginate } = useContext(GlobalContext);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // * api call for listing
  const getList = async (arg) => {
    try {
      setLoading(true);
      const payload = await fetchPokemonList(arg);
      setData(payload);
      setPaginate((prev) => ({
        ...prev,
        total: payload.count,
      }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // * on page change it will new api
  const onPageChange = useCallback(
    (page) => {
      setPaginate((prev) => ({
        ...prev,
        offset: (page - 1 || 0) * prev.limit,
        page,
      }));
      getList({
        offset: (page - 1 || 0) * paginate.limit,
      });
    },
    [paginate.limit]
  );

  // * checking if there is data from server then using it
  useEffect(() => {
    if (props.list?.results) {
      setPaginate((prev) => ({ ...prev, total: props.list.count }));
      setData(props.list);
    } else {
      getList();
    }
  }, []);

  // * doing manual filtering because search functionality is not provided from https://pokeapi.co/
  // * memorizing so it won't perform filter every time component renders
  const results = useMemo(() => {
    if (!keyword) return data.results;
    const list = data.results || [];

    // basic js filter on name
    const filteredList = list.filter((item) =>
      item.name?.toLowerCase()?.includes((keyword || "").toLowerCase())
    );

    return filteredList;
  }, [keyword, data.results]);

  return {
    isLoading,
    list: results,
    paginate,
    onPageChange,
  };
};

export default usePokemonList;
