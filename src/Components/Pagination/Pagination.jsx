import style from "./Pagination.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import cn from "classnames";
import { useEffect, useState } from "react";

const Pagination = () => {
  const [pagePagination, setPagePagination] = useState(1);
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector((state) => state.goods);

  useEffect(() => {
    setPagePagination(page);
  }, [page]);

  const handlePageChange = (newpage) => {
    setPagePagination(newpage);
  };
  const handleNextPage = () => {
    if (pagePagination < pages) {
      handlePageChange(pagePagination + 1);
    }
  };
  const handlePrevPage = () => {
    if (pagePagination > 1) {
      handlePageChange(pagePagination - 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    let startPage =
      pagePagination === pages && pages >= 3
        ? pagePagination - 2
        : Math.max(1, pagePagination - 1);
    let endPage = Math.min(startPage + 2, pages);
    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li className={style.item} key={i}>
          <NavLink
            to={`${pathname}?page=${i}`}
            className={cn(style.link, i === pagePagination ?? style.linkActive)}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </NavLink>
        </li>,
      );
    }
    return paginationItems;
  };

  return (
    pages > 1 && (
      <div className={style.pagination}>
        <button
          className={style.arrow}
          onClick={handlePrevPage}
          disabled={pagePagination <= 2}
        >
          &lt;
        </button>

        <ul className={style.list}>{renderPaginationItems()}</ul>
        <button
          className={style.arrow}
          onClick={handleNextPage}
          disabled={pagePagination >= (pages - 1 || pages <= 3)}
        >
          &gt;
        </button>
      </div>
    )
  );
};

export default Pagination;
