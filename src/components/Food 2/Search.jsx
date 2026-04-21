"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (searchInput) {
      params.set("search", searchInput);
    } else {
      params.delete("search");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        placeholder="Search"
        className="input"
      />
      <button onClick={handleSearch} className="btn">
        Search
      </button>
    </div>
  );
};

export default Search;
