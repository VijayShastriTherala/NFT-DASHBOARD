import React, { useState } from "react";

import NFTCard from "../components/NFTCard";
import { nfts } from "../data/data";

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Artwork", "Book"];

  const filteredNfts =
    activeCategory === "All"
      ? nfts
      : nfts.filter((nft) => nft.category === activeCategory);

  return (
    <div>
      <div className="mb-5">
        <h1 className="page-title">
          Collections
        </h1>

        <p className="page-subtitle">
          Welcome Collection Page
        </p>
      </div>

      <div className="mb-5 flex gap-4 text-xs">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-1 transition-colors ${
              activeCategory === category
                ? "bg-primary text-white font-medium"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredNfts.map((nft) => (
          <NFTCard 
            key={nft.id}
            nft={nft}
          />
        ))}
      </div>
    </div>
  );
}