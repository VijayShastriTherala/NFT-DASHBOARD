import React, { useState } from "react";
import { X } from "lucide-react";

import UserAvatar from "./UserAvatar";
import { bids as initialBids } from "../data/data";
import { ManImg } from "../assets/images";

export default function BidTable() {
  const [bidsList, setBidsList] = useState(initialBids);
  const [selectedRows, setSelectedRows] = useState({});

  const handleDelete = (index) => {
    setBidsList((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleSelect = (index) => {
    setSelectedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[760px]">
        
        <div className="grid grid-cols-[40px_1.5fr_1fr_1fr_1.2fr_1.2fr_40px] items-center border-b border-white/10 px-2 py-3 text-xs font-semibold text-gray-300">
          <span>□</span>
          <span>Item List</span>
          <span>Open Price</span>
          <span>Your Offer</span>
          <span>Recent Offer</span>
          <span>Time Left</span>
          <span>Action</span>
        </div>

        <div className="space-y-2 pt-3">
          {bidsList.map((bid, index) => (
            <div
              key={index}
              className="grid grid-cols-[40px_1.5fr_1fr_1fr_1.2fr_1.2fr_40px] items-center rounded-lg bg-dark-100 px-2 py-3 text-xs"
            >
              <button
                onClick={() => toggleSelect(index)}
                className="text-left text-gray-400 hover:text-white"
              >
                {selectedRows[index] ? "■" : "□"}
              </button>

              <div className="flex items-center gap-2.5">
                <img
                  src={bid.image}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover shrink-0"
                />

                <div>
                  <p className="font-semibold text-white">
                    {bid.name}
                  </p>

                  <p className="text-[11px] text-gray-400">
                    {bid.owner}
                  </p>
                </div>
              </div>

              <span className="text-gray-300 font-medium">
                0.0025 ETH
              </span>

              <span className="text-gray-300 font-medium">
                0.0025 ETH
              </span>

              <div className="flex items-center gap-2">
                <UserAvatar
                  src={ManImg}
                  size="h-7 w-7"
                />

                <span className="text-gray-300 font-medium">0.0025 ETH</span>
              </div>

              <span className="text-gray-300 font-medium">
                2 Hours 1 min 30s
              </span>

              <button
                onClick={() => handleDelete(index)}
                className="text-gray-400 transition hover:text-red-500"
                title="Remove bid"
              >
                <X size={14} />
              </button>
            </div>
          ))}

          {bidsList.length === 0 && (
            <p className="py-6 text-center text-sm text-gray-400">
              No active bids remaining.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}