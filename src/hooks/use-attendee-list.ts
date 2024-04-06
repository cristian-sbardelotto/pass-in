import { useState } from 'react';

type Options = {
  totalPages: number;
};

export function useAttendeeList({ totalPages }: Options) {
  const [search, setSearch] = useState(() => {
    const url = new URL(location.toString());

    if (url.searchParams.has('search')) {
      return url.searchParams.get('search') ?? '';
    }

    return '';
  });

  const [page, setPage] = useState(() => {
    const url = new URL(location.toString());

    if (url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'));
    }

    return 1;
  });

  function goToNextPage() {
    if (page < totalPages) setCurrentPage(page + 1);
  }

  function goToPreviousPage() {
    if (page > 1) setCurrentPage(page - 1);
  }

  function goToFirstPage() {
    if (page > 1) setCurrentPage(1);
  }

  function goToLastPage() {
    if (page < totalPages) setCurrentPage(totalPages);
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString());
    url.searchParams.set('page', String(page));
    history.pushState({}, '', url);

    setPage(page);
  }

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString());
    url.searchParams.set('search', search);
    history.pushState({}, '', url);

    setSearch(search);
  }

  function handleSearch(value: string) {
    setCurrentSearch(value);
    setCurrentPage(1);
  }

  return {
    search,
    page,
    setSearch,
    handleSearch,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
    setCurrentPage,
    setCurrentSearch,
  };
}
