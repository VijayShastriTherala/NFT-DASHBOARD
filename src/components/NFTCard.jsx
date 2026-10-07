import React, { useState } from "react";
import { Check } from "lucide-react";

export default function NFTCard({ nft }) {
  const [bidPlaced, setBidPlaced] = useState(false);

  const handleBid = () => {
    setBidPlaced(true);
    setTimeout(() => setBidPlaced(false), 2500);
  };

  return (
    <div className="dashboard-card group overflow-hidden p-3 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={nft.image}
          alt={nft.name}
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-44"
        />
      </div>

      <div className="pt-4">
        <h3 className="text-sm font-semibold text-white">
          {nft.name}
        </h3>

        <div className="mt-3 flex justify-between gap-3 text-[10px]">
          <div>
            <p className="text-gray-400">
              Auction time
            </p>

            <p className="mt-1 text-gray-500">
              {nft.time}
            </p>
          </div>

          <div className="text-right">
            <p className="text-gray-400">
              Current Bid
            </p>

            <p className="mt-1 text-primary">
              {nft.bid}
            </p>

            <p className="text-gray-500">
              {nft.price}
            </p>
          </div>
        </div>

        <button
          onClick={handleBid}
          className={`mt-4 w-full rounded-md px-5 py-2 text-xs font-medium text-white transition-all duration-300 ${
            bidPlaced
              ? "bg-green-600 shadow-lg"
              : "bg-primary hover:bg-purple-600 hover:shadow-lg"
          }`}
        >
          {bidPlaced ? (
            <span className="flex items-center justify-center gap-1">
              <Check size={14} /> Bid Placed!
            </span>
          ) : (
            "Place a Bid"
          )}
        </button>
      </div>
    </div>
  );
}