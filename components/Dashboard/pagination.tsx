import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";

type PaginationProps = {
  pageSize: number;
  currentPage: number;
  totalItems: number;
  handlePageChange: (page: number) => void;
};

export default function Pagination({
  pageSize,
  currentPage,
  totalItems,
  handlePageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const from = pageSize * (currentPage - 1) + 1;
  const to = currentPage === totalPages ? totalItems : pageSize * currentPage;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  return totalItems >= pageSize ? (
    <div className="bg-primary-pearl dark:bg-primary-pearl-alt px-4 py-3 flex items-center justify-between sm:px-6 float-right">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          className="relative inline-flex items-center px-4 py-2 border border-secondary-gray-medium dark:border-secondary-gray-medium-alt text-sm font-medium rounded-md text-secondary-gray-dark dark:text-secondary-gray-dark-alt bg-primary-pearl dark:bg-primary-pearl-alt hover:bg-secondary-gray-lighter dark:hover:bg-secondary-gray-lighter-alt"
          onClick={() => handlePrevPage()}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-gray-medium dark:border-secondary-gray-medium-alt text-sm font-medium rounded-md text-secondary-gray-dark dark:text-secondary-gray-dark-alt bg-primary-pearl dark:bg-primary-pearl-alt hover:bg-secondary-gray-lighter dark:hover:bg-secondary-gray-lighter-alt"
          onClick={() => handleNextPage()}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center">
        <div>
          <p className="text-sm text-secondary-gray-darkest dark:text-secondary-gray-darkest-alt">
            <span className="font-medium">{from}</span> -{" "}
            <span className="font-medium">{to}</span> of{" "}
            <span className="font-medium">{totalItems}</span>
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md -space-x-px"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center px-2 py-2 bg-transparent text-sm font-medium text-secondary-gray-dark hover:bg-secondary-gray-medium dark:hover:bg-secondary-gray-medium-alt"
              onClick={() => handlePrevPage()}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              className="relative inline-flex items-center px-2 py-2 bg-transparent text-sm font-medium text-secondary-gray-dark hover:bg-secondary-gray-medium dark:hover:bg-secondary-gray-medium-alt"
              onClick={() => handleNextPage()}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
