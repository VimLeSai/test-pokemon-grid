import React from "react";
import Image from "next/image";

const Card = (props) => {
  // * here not calling an extra api for image and id details
  // * directly using it from given url
  const id = React.useMemo(() => {
    let tempValues = props.url.split("/");
    let temp = tempValues[tempValues.length - 2];
    return temp;
  }, [props.url]);

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`/${id}`}
      className="text-left border w-52 rounded-xl hover:text-blue-600 hover:shadow-md focus:text-blue-600"
    >
      <div className="p-6 overflow-hidden bg-gray-200 rounded-t-xl">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          width={200}
          height={240}
        />
      </div>
      <div className="flex flex-col text-center">
        <p className="mt-3 text-xl font-semibold">{props.name}</p>
        <span className="mb-3 text-gray-500 text-md">#{id}</span>
      </div>
    </a>
  );
};

export default Card;
