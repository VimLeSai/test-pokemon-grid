import React from "react";
import Image from "next/image";

const PokemonDetail = () => {
  return (
    <main className="flex flex-col items-start justify-start flex-1 w-full px-32 md:flex-row">
      <div className="relative p-4 border border-gray-300 rounded-xl md:p-12 hover:shadow-md">
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png"
          }
          className="object-contain"
          width={420}
          height={480}
        />
      </div>
      <div className="w-1/2 px-4 py-2 md:px-12 md:py-6">
        <h1 className="mx-4 text-3xl font-semibold">Name of Pokemon!</h1>
        <span className="mx-4 italic text-gray-500">#id</span>

        <div className="grid grid-cols-2 gap-6 w-fit">
          <div className="flex flex-col gap-2 m-4">
            <label className="text-lg capitalize">height</label>
            <span className="text-gray-500">4.3</span>
          </div>
          <div className="flex flex-col gap-2 m-4">
            <label className="text-lg capitalize">weight</label>
            <span className="text-gray-500">4.3</span>
          </div>
          <div className="flex flex-col gap-2 m-4">
            <label className="text-lg capitalize">category</label>
            <span className="text-gray-500">4.3</span>
          </div>
          <div className="flex flex-col gap-2 m-4">
            <label className="text-lg capitalize">abilities</label>
            <span className="text-gray-500">4.3</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 m-4">
          <label className="text-lg capitalize">Type</label>
          <div className="text-gray-500">4.3</div>
        </div>
        <div className="flex flex-col gap-2 m-4">
          <label>Weaknesses</label>
          <div className="text-gray-500">4.3</div>
        </div>
        <button>↤ Back</button>
      </div>
    </main>
  );
};

export default PokemonDetail;
