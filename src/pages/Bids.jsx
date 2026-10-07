import React, { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import BidTable from "../components/BidTable";
import StatCard from "../components/StatCard";

export default function Bids() {
    const [showPlaceBidModal, setShowPlaceBidModal] = useState(false);
    const [bidItemName, setBidItemName] = useState("");
    const [bidAmount, setBidAmount] = useState("");
    const [submittedMsg, setSubmittedMsg] = useState("");

    const handleBidSubmit = (e) => {
        e.preventDefault();
        if (bidItemName && bidAmount) {
            setSubmittedMsg(`Successfully placed ${bidAmount} ETH bid on "${bidItemName}"!`);
            setShowPlaceBidModal(false);
            setBidItemName("");
            setBidAmount("");
            setTimeout(() => setSubmittedMsg(""), 3500);
        }
    };

    return (
        <div className="space-y-7">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="page-title">
                        Bids
                    </h1>

                    <p className="page-subtitle">
                        Welcome Bids Page
                    </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span>Home</span>
                    <ChevronRight size={13} className="text-gray-500" />
                    <span className="font-medium text-purple-400">Bids</span>
                </div>
            </div>

            {submittedMsg && (
                <div className="rounded-lg bg-green-500/20 px-4 py-2.5 text-xs text-green-400 border border-green-500/30">
                    {submittedMsg}
                </div>
            )}

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

                <StatCard 
                 value="24K"
                 subtitle="Artworks"
                 color="purple"
                />

                <StatCard 
                 value="82K"
                 subtitle="Auction"
                 color="green"
                />

                <StatCard 
                 value="200"
                 subtitle="Creators"
                 color="yellow"
                />

                <StatCard 
                  value="89"
                  subtitle="Canceled"
                  color="red"
                />

            </div>

            <section>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-base font-semibold text-white"> 
                        Active Bids
                    </h2>

                    <button
                        onClick={() => setShowPlaceBidModal(true)}
                        className="primary-button"
                    >
                        Place a Bid
                    </button>

                </div>

                <div className="dashboard-card p-2 sm:p-4">
                    <BidTable />

                </div>
            </section>

            {/* Place Bid Modal */}
            {showPlaceBidModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="w-full max-w-sm rounded-xl bg-dark-100 p-5 shadow-2xl border border-white/10">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                            <h3 className="text-sm font-semibold text-white">Place New Bid</h3>
                            <button onClick={() => setShowPlaceBidModal(false)} className="text-gray-400 hover:text-white">
                                <X size={16} />
                            </button>
                        </div>
                        <form onSubmit={handleBidSubmit} className="space-y-3 text-xs">
                            <div>
                                <label className="mb-1 block text-gray-300">Item Name</label>
                                <input
                                    className="input"
                                    value={bidItemName}
                                    onChange={(e) => setBidItemName(e.target.value)}
                                    placeholder="e.g. Liquid Wave"
                                    required
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-gray-300">Bid Amount (ETH)</label>
                                <input
                                    className="input"
                                    value={bidAmount}
                                    onChange={(e) => setBidAmount(e.target.value)}
                                    placeholder="0.05 ETH"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="primary-button w-full mt-2"
                            >
                                Confirm Bid
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
}