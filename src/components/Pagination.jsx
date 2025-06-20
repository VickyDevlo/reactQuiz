import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { SkipBack, SkipForward } from "lucide-react";

const Pagination = () => {
  const [tableData, setTableData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const rowsPerPage = 10;
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;

  const currentItems = tableData?.users.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  
  const totalPages = Math.ceil(tableData?.total / rowsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePage = (currPage) => {
    setCurrentPage(currPage);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=0")
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <div className="container mx-auto w-full p-4">
      {/* Table skeleton loading */}
      <table className="table-fixed w-full rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-center">
          <tr>
            <th className="px-4 py-2 font-semibold text-xl text-center text-gray-700">
              <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            </th>
            <th className="px-4 py-2 font-semibold text-xl text-center text-gray-700">
              <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            </th>
            <th className="px-4 py-2 font-semibold text-xl text-center text-gray-700">
              <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            </th>
            <th className="px-4 py-2 font-semibold text-xl text-center text-gray-700">
              <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            </th>
            <th className="px-4 py-2 font-semibold text-xl text-center text-gray-700">
              <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-md"></div>
            </th>
          </tr>
        </thead>
        <tbody className="border border-gray-300">
          {Array.from({ length: rowsPerPage }).map((_, i) => (
            <tr
              key={i}
              className={`border-t ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            >
              <td className="px-4 py-2 text-center">
                <div className="w-12 h-6 bg-gray-300 animate-pulse rounded-md"></div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="w-24 h-6 bg-gray-300 animate-pulse rounded-md"></div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="w-36 h-6 bg-gray-300 animate-pulse rounded-md"></div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-md"></div>
              </td>
              <td className="px-4 py-2 text-center">
                <div className="w-12 h-6 bg-gray-300 animate-pulse rounded-md"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Skeleton */}
      <div className="mt-3 w-full flex items-center justify-center flex-wrap gap-2">
        <Button disabled className="cursor-pointer">
          <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full"></div>
        </Button>

        {Array.from({ length: totalPages }, (_, i) => (
          <Button key={i} disabled className="cursor-pointer">
            <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full"></div>
          </Button>
        ))}

        <Button disabled className="cursor-pointer">
          <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full"></div>
        </Button>
      </div>
    </div>
  ) : (
    <div className="container mx-auto w-full overflow-x-auto p-4">
      <table className="table-fixed w-full rounded-xl">
        <thead className="border border-gray-300 bg-gray-100 text-lg text-center">
          <tr>
            <th
              className="px-4 py-2 font-semibold
             text-gray-700"
            >
              Sr.No.
            </th>
            <th
              className="px-4 py-2 font-semibold
             text-gray-700"
            >
              Name
            </th>
            <th
              className="px-4 py-2 font-semibold
             text-gray-700"
            >
              Email
            </th>
            <th
              className="px-4 py-2 font-semibold
             text-gray-700"
            >
              Gender
            </th>
             
          </tr>
        </thead>
        <tbody className="border border-gray-300">
          {currentItems &&
            currentItems?.map((items, i) => (
              <tr
                key={items?.id}
                className={`border-t ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2 text-center text-lg">{items?.id}</td>
                <td className="px-4 py-2 text-center text-lg">
                  {items?.firstName}
                </td>
                <td className="px-4 py-2 text-center text-lg">
                  {items?.email}
                </td>
                <td className="px-4 py-2 text-center text-lg capitalize">
                  {items?.gender}
                </td>
                
              </tr>
            ))}
        </tbody>
      </table>

      <div className="mt-3 w-full flex items-center justify-center flex-wrap gap-2">
        <Button
          onClick={handlePrev}
          size={"icon"}
          disabled={currentPage === 1}
          className={"cursor-pointer"}
        >
          <SkipBack />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            size={"icon"}
            variant={currentPage === i + 1 ? "" : "outline"}
            onClick={() => handlePage(i + 1)}
            className={"cursor-pointer transition-none"}
          >
            {i + 1}
          </Button>
        ))}

        <Button
          size={"icon"}
          disabled={currentPage === totalPages}
          onClick={handleNext}
          className={"cursor-pointer"}
        >
          <SkipForward />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
