import { observer } from "mobx-react-lite";
import cl from "./Pagination.module.css";
import { useContext } from "react";
import { Context } from "../../../main";

const Pagination = observer(() => {
  const { device } = useContext(Context);

  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  for (let index = 0; index < pageCount; index++) {
    pages.push(index + 1);
  }

  return (
    <div className={cl.pagination}>
      {pages.map((page) => (
        <div
          key={page}
          className={
            device.page === page
              ? `${cl.pagination__item} ${cl.pagination__item_active}`
              : cl.pagination__item
          }
          onClick={() => device.setPage(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
});

export default Pagination;
