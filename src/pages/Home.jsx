import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";

import NFTCard from "../components/NFTCard";
import StatCard from "../components/StatCard";
import UserAvatar from "../components/UserAvatar";
import { nfts, nftImages } from "../data/data";
import { papaytaImg } from "../assets/images";

export default function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [heroBidPlaced, setHeroBidPlaced] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [followedCreators, setFollowedCreators] = useState({});

  const toggleFollow = (id) => {
    setFollowedCreators((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredNfts =
    activeCategory === "All"
      ? nfts
      : nfts.filter((nft) => nft.category === activeCategory);

  return (
    <div className="space-y-8">

      {/* Hero */}
      <section className="grid gap-4 lg:grid-cols-2">
        
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-900 p-6">
          <div className="relative z-10 max-w-sm">
            <h1 className="text-xl font-bold leading-tight text-white">
              Discover, Collect, Sell
              <br />
              and Create your NFT
            </h1>

            <p className="mt-3 text-xs text-purple-200">
              Digital marketplace for crypto collectibles
              and non-fungible tokens.
            </p>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => navigate("/collections")}
                className="rounded-md bg-purple-500 px-5 py-2 text-xs text-white transition hover:bg-purple-600"
              >
                Explore
              </button>

              <button
                onClick={() => setShowCreateModal(true)}
                className="rounded-md bg-red-500 px-5 py-2 text-xs text-white transition hover:bg-red-600"
              >
                Create
              </button>
            </div>
          </div>

          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/40 blur-3xl" />
        </div>

        <div className="dashboard-card flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
          <img
            src={nftImages[1]}
            alt="Birghten LQ"
            className="h-36 w-full rounded-2xl object-cover sm:h-44 sm:w-44 shrink-0"
          />

          <div className="flex flex-1 flex-col justify-between space-y-3 py-1 sm:space-y-2">
            <div className="flex items-center gap-2.5">
              <UserAvatar
                src={papaytaImg}
                size="h-8 w-8"
              />

              <div className="flex items-center gap-1.5">
                <p className="text-sm font-semibold text-white">
                  John Abraham
                </p>
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block" />
              </div>
            </div>

            <div>
              <h2 className="text-base font-bold text-white sm:text-lg">
                Birghten LQ
              </h2>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div>
                <p className="text-gray-300">
                  Auction time
                </p>

                <p className="mt-1 font-medium text-gray-400">
                  3h 1m 50s
                </p>
              </div>

              <div className="text-right">
                <p className="text-gray-300">
                  Current Bid : <span className="font-semibold text-purple-400">0.05 ETH</span>
                </p>

                <p className="mt-1 font-medium text-gray-400">
                  0.15 ETH
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => {
                  setHeroBidPlaced(true);
                  setTimeout(() => setHeroBidPlaced(false), 2500);
                }}
                className={`rounded-xl px-6 py-2.5 text-xs font-semibold text-white transition-all duration-300 shadow-md ${
                  heroBidPlaced ? "bg-green-600" : "bg-primary hover:bg-purple-600"
                }`}
              >
                {heroBidPlaced ? "Bid Placed!" : "Place a Bid"}
              </button>

              <button
                onClick={() => setShowDetailsModal(true)}
                className="rounded-xl bg-red-500 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-red-600 shadow-md"
              >
                Details
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* Trending */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">
            Trending Bids
          </h2>

          <div className="flex gap-4 text-[10px]">
            {["All", "Artwork", "Book"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-3 py-1 transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredNfts.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
      </section>

      {/* Analytics */}
      <section className="grid gap-4 xl:grid-cols-3">

        <div>
          <h2 className="mb-3 text-base font-semibold text-white">
            Trending Bids
          </h2>

          <div className="space-y-3">
            <StatCard
              value="24K"
              subtitle="Artworks"
              color="purple"
            />

            <StatCard
              value="89"
              subtitle="Auction"
              color="red"
            />

            <StatCard
              value="82K"
              subtitle="Creators"
              color="green"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-base font-semibold text-white">
            ETH Price
          </h2>

          <div className="dashboard-card flex h-64 items-center p-4">
            <svg
              viewBox="0 0 350 200"
              className="h-full w-full"
            >
              <defs>
                <linearGradient id="ethAreaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7047EB" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7047EB" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {[
                { label: "350", y: 22 },
                { label: "300", y: 44 },
                { label: "250", y: 66 },
                { label: "200", y: 88 },
                { label: "150", y: 110 },
                { label: "100", y: 132 },
                { label: "50", y: 154 },
                { label: "0", y: 176 },
              ].map(({ label, y }) => (
                <text
                  key={label}
                  x="24"
                  y={y}
                  fill="#9CA3AF"
                  fontSize="11"
                  fontWeight="500"
                  fontFamily="sans-serif"
                  textAnchor="end"
                >
                  {label}
                </text>
              ))}

              <path
                d="M 50 176 L 85 130 L 120 136 L 155 110 L 190 117 L 225 88 L 260 123 L 295 136 L 330 123 L 330 176 L 50 176 Z"
                fill="url(#ethAreaGrad)"
              />

              <path
                d="M 50 176 L 85 130 L 120 136 L 155 110 L 190 117 L 225 88 L 260 123 L 295 136 L 330 123"
                fill="none"
                stroke="#7047EB"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {[
                [50, 176],
                [85, 130],
                [120, 136],
                [155, 110],
                [190, 117],
                [225, 88],
                [260, 123],
                [295, 136],
                [330, 123],
              ].map(([x, y], index) => (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="4.5"
                  fill="#7047EB"
                />
              ))}
            </svg>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-base font-semibold text-white">
            Statistics
          </h2>

          <div className="dashboard-card flex h-64 flex-col items-center justify-center p-4">
            <svg viewBox="0 0 200 150" className="h-44 w-44">
              <path
                d="M 100 15 A 60 60 0 0 1 100 135 L 100 112 A 37 37 0 0 0 100 38 Z"
                fill="#7047EB"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />

              <path
                d="M 100 135 A 60 60 0 0 1 100 15 L 100 38 A 37 37 0 0 0 100 112 Z"
                fill="#1D1931"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
            </svg>

            <div className="mt-3 flex items-center justify-center gap-6 text-xs font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-primary inline-block shrink-0" />
                <span>Artwork Sold</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border border-white/90 inline-block shrink-0" />
                <span>Artwork CanCel</span>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Activity & Top Creators */}
      <section className="grid gap-4 lg:grid-cols-2">

        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">
            Recent Activity
          </h2>

          <div className="dashboard-card overflow-hidden">
            {[
              "Purchase by you for 0.05 ETH",
              "0.06ETH Received",
              "Started Following you",
              "Has been sold by 12.75ETH",
              "Purchase by you for 0.05 ETH",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-white/5 px-4 py-3 last:border-none"
              >
                <div className="flex items-center gap-3">
                  <UserAvatar
                    src={papaytaImg}
                    size="h-7 w-7"
                  />

                  <div>
                    <p className="text-[10px] font-medium text-white">
                      Papaya
                    </p>

                    <p className="text-[8px] text-gray-400">
                      {text}
                    </p>
                  </div>
                </div>

                <span className="text-[8px] text-gray-500">
                  12 mins ago
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold text-white">
            Top Creators
          </h2>

          <div className="grid gap-3 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="dashboard-card flex items-center justify-between p-3"
              >
                <div className="flex items-center gap-3">
                  <UserAvatar src={papaytaImg} />

                  <div>
                    <p className="text-[10px] font-semibold text-white">
                      Papaya
                    </p>

                    <p className="text-[8px] text-gray-400">
                      60 Items
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleFollow(item)}
                  className={`px-3 py-1 text-[8px] rounded-md transition ${
                    followedCreators[item]
                      ? "bg-green-600 text-white"
                      : "secondary-button"
                  }`}
                >
                  {followedCreators[item] ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Create Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-xl bg-dark-100 p-5 shadow-2xl border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <h3 className="text-sm font-semibold text-white">Create New NFT</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-white">
                <X size={16} />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div>
                <label className="mb-1 block text-gray-300">NFT Name</label>
                <input className="input" placeholder="e.g. Cosmic Wave #1" />
              </div>
              <div>
                <label className="mb-1 block text-gray-300">Price (ETH)</label>
                <input className="input" placeholder="0.15 ETH" />
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="primary-button w-full mt-2"
              >
                Upload & Create NFT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-xl bg-dark-100 p-5 shadow-2xl border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <h3 className="text-sm font-semibold text-white">Auction Details: Birghten LQ</h3>
              <button onClick={() => setShowDetailsModal(false)} className="text-gray-400 hover:text-white">
                <X size={16} />
              </button>
            </div>
            <div className="space-y-2 text-xs text-gray-300">
              <p><strong className="text-white">Creator:</strong> John Abraham</p>
              <p><strong className="text-white">Auction Ends:</strong> 3h 1m 50s</p>
              <p><strong className="text-white">Current Highest Bid:</strong> 0.05 ETH</p>
              <p><strong className="text-white">Reserve Price:</strong> 0.15 ETH</p>
              <button
                onClick={() => setShowDetailsModal(false)}
                className="primary-button w-full mt-4"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}