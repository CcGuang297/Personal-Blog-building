import type { Metadata } from "next";
import { Suspense } from "react";
import SearchEmptyClient from "./search-empty-client";

export const metadata: Metadata = {
  title: "Search Empty",
  description: "搜索无结果状态页。",
};

export default function SearchEmptyPage() {
  return (
    <Suspense fallback={null}>
      <SearchEmptyClient />
    </Suspense>
  );
}
