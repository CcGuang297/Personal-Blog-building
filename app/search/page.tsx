import type { Metadata } from "next";
import SearchClient from "./search-client";

export const metadata: Metadata = {
  title: "Search",
  description: "站内搜索界面。",
};

export default function SearchPage() {
  return <SearchClient />;
}
