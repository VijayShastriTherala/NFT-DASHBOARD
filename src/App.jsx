import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Bids from "./pages/Bids";
import Saved from "./pages/Saved";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App () {
    return (
        <Layout>
            <Routes>
            <Route path="/" element={<Home />}/>

            <Route path="/bids" element={<Bids />}/>

            <Route path="/saved" element={<Saved />}/>

            <Route 
                path="/collections"
                element={<Collections />}
            />

            <Route 
            path="/profile" 
            element={<Profile />}
            />

            <Route 
            path="/settings"
            element={<Settings />}
            />

            </Routes>
        </Layout>
    );
}