import React from "react";

import NFTCard from "../components/NFTCard";
import { nfts } from "../data/data";

export default function Saved() {
    return (
        <div>
            <div className="mb-6">
                <h1 className="page-title">
                    Saved Items
                </h1>

                <p className="page-subtitle">
                    Welcome Saved Page
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {nfts.map((nft) => (
                    <NFTCard 
                      key={nft.id}
                      nft={nft}
                    />
                ))}
            </div>
        </div>
    );
}