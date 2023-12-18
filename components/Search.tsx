"use client";
import { Input } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  function handleSearch(term: string) {
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      {" "}
      <Input
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className="h-10"
        type="Search"
        label="Search"
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default Search;
