import React, { memo } from "react";
import Image from "next/image";

const PokemonDetail = ({ data = {} }) => {
  const { sprites = {}, abilities = [], types = [] } = data;
  return (
    <main className="flex flex-col items-start justify-start flex-1 w-full px-12 mx-auto mb-10 max-w-7xl md:px-20 lg:px-32 md:flex-row">
      <div className="relative p-4 border border-gray-300 rounded-xl md:p-12 hover:shadow-md">
        <Image
          src={
            sprites.other["official-artwork"]?.front_default ||
            sprites.front_default
          }
          className="object-contain"
          width={420}
          height={480}
        />
      </div>
      <div className="py-6 lg:px-4 lg:py-2 lg:w-1/2 md:px-12 md:py-6">
        <h1 className="mx-4 text-3xl font-semibold">{data.name}</h1>
        <span className="mx-4 italic text-gray-500">#{data.id}</span>

        <div className="grid w-full grid-cols-2 gap-6 m-4 grid-wrap md:w-fit">
          <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg">
            <label className="text-lg capitalize">height</label>
            <span className="text-gray-500">{data.height}</span>
          </div>
          <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg">
            <label className="text-lg capitalize">weight</label>
            <span className="text-gray-500">{data.weight}</span>
          </div>
          <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg">
            <label className="text-lg capitalize">Base Experience</label>
            <span className="text-gray-500">{data.base_experience}</span>
          </div>
          <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg">
            <label className="text-lg capitalize">abilities</label>
            <span className="text-gray-500">
              {abilities.map((item) => item.ability?.name).join(", ")}
            </span>
          </div>
          <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg">
            <label className="text-lg capitalize">Type</label>
            <div className="text-gray-500">
              {" "}
              {types.map((item) => item.type?.name).join(", ")}
            </div>
          </div>
        </div>

        <a href="/">
          <button className="px-8 py-2 m-4 text-white bg-blue-500 rounded-lg">
            ↤ Back
          </button>
        </a>
      </div>
    </main>
  );
};

export default memo(PokemonDetail);
