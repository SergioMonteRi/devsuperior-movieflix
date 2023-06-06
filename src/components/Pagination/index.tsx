import ReactPaginate from "react-paginate";

import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";

import "./styles.css";

type Props = {
  pageCount: number;
  pageRange: number;
  onChange?: (pageNumber: number) => void;
  forcePage?: number;
};

const Pagination = ({ pageCount, pageRange, onChange, forcePage }: Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRange}
      marginPagesDisplayed={1}
      previousLabel={
        <div className="pagination-arrow-container">
          <ArrowIcon />
        </div>
      }
      nextLabel={
        <div className="pagination-arrow-container">
          <ArrowIcon />
        </div>
      }
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      disabledClassName="arrow-inactive"
      activeLinkClassName="paginagion-link-active"
    />
  );
};

export default Pagination;
