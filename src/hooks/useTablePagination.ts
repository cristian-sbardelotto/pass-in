import { useState } from 'react';

import { attendees } from '../data/attendees';

export function useTablePagination(initialPage?: number) {
  const [page, setPage] = useState(initialPage ?? 0);
  const totalPages = Math.ceil(attendees.length / 10);

  function goToNextPage() {
    if (page < totalPages) setPage(page + 1);
  }

  function goToPreviousPage() {
    if (page > 1) setPage(page - 1);
  }

  function goToFirstPage() {
    if (page > 1) setPage(1);
  }

  function goToLastPage() {
    if (page < totalPages) setPage(totalPages);
  }

  return {
    page,
    totalPages,
    goToNextPage,
    goToPreviousPage,
    goToFirstPage,
    goToLastPage,
  };
}
