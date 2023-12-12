// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useRouter, usePathname } from 'next/router';
// import { useDebounce } from 'use-debounce';

// type SearchInputProps = {
//   placeholder: string;
//   onSearch: (searchQuery: string) => void;
// };

// const SearchInput = ({ placeholder = 'Search...', onSearch }: SearchInputProps) => {
//   const router = useRouter();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [query, debouncedQuery] = useDebounce(searchQuery, 500);
//   const pathname = usePathname();

//   const handleSearch = (event: React.FormEvent) => {
//     event.preventDefault();
//     const encodedSearchQuery = encodeURI(searchQuery);

//     if (query) {
//       router.push(`/?search=${query}`);
//     } else {
//       router.push('/');
//     }
//     onSearch(encodedSearchQuery);
//   };

//   useEffect(() => {
//     if (searchQuery.trim() !== '') {
//       router.push(`/?search=${query}`);
//     } else {
//       router.push('/');
//     }
//   }, [query, router]);

//   return (
//     <form onSubmit={handleSearch}>
//       <input
//         type="text"
//         placeholder={placeholder}
//         className="rounded-lg border-2 border-gray-300 py-2 px-4"
//         value={searchQuery}
//         onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
//       />
//       <button type="submit" className="rounded-lg bg-gray-600 text-white p-2">Search</button>
//     </form>
//   );
// };

// export default SearchInput;

// const SearchPage = () => {
//     const onSearch = (searchQuery: string) => {
//       console.log('Search query:', searchQuery);
//     };
  
//     return (
//       <>
//         <SearchInput placeholder="Search for posts" onSearch={onSearch} />
//         {/* Display the results of the search here */}
//       </>
//     );
//   };