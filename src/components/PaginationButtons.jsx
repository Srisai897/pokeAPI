import { Pagination } from "react-bootstrap";

export default function PaginationButtons({
  count,
  valuesPerPage,
  activePageId,
  setCurrentPageUrl,
}) {
  let active = activePageId;
  let items = [];

  for (let i = 1; i <= Math.ceil(count / valuesPerPage); i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={() => setCurrentPageUrl(i)}
      >
        {i}
      </Pagination.Item>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Pagination>{items}</Pagination>
    </div>
  );
}
