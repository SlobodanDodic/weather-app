import React from "react";
import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Topbar from "./components/Topbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Search from "./pages/Search";
import DailyView from "./pages/DailyView";
// import FooterInfo from "./components/FooterInfo";

export default function App() {
  return (
    <DataProvider>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/daily/:id" element={<DailyView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <FooterInfo /> */}
    </DataProvider>
  );
}
