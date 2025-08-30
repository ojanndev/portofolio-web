import React from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import ReactPaginate from "react-paginate";

export default function Pagination({ data, rows, page, pages, changePage }) {
  return (
    <div
      className={`
        flex
        flex-col-reverse
        md:flex-row
        w-full
        mb-10
        md:mb-0
        justify-between
        items-center
        mt-3
        text-white
      
        ${data.length === 0 ? "hidden" : ""}
      `}
    >
      <p className="text-sm font-medium">
        Page{" "}
        <span className=" font-bold">
          {page + 1} of {pages}
        </span>{" "}
        {"|"} Total Rows <span className="font-bold ">{data.length}</span>
      </p>

      <nav key={rows} role="navigation" aria-label="pagination">
        <ReactPaginate
          previousLabel={<PiCaretLeftBold />}
          nextLabel={<PiCaretRightBold />}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          pageCount={pages}
          onPageChange={changePage}
          containerClassName="flex space-x-3 md:space-x-6 justify-center md:justify-start items-center text-sm"
          pageLinkClassName="px-3 py-1 hover:bg-white hover:text-black cursor-pointer rounded-md duration-150"
          previousLinkClassName="px-3 md:px-4 py-1  duration-150"
          nextLinkClassName="px-3 md:px-4 py-1  duration-150"
          activeClassName="bg-white py-1 rounded-md text-black"
        />
      </nav>
    </div>
  );
}
