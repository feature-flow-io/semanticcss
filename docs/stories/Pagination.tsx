export const Pagination = () => {
  return (
    <nav className="pagination">
      <span className="previous-page" aria-disabled="true">
        Previous
      </span>

      <em aria-current="page" className="pagination-number">
        1
      </em>
      <a href="#url" className="pagination-number" aria-label="Page 2">
        2
      </a>
      <a href="#url" className="pagination-number" aria-label="Page 3">
        3
      </a>

      <span className="gap">…</span>

      <a href="#url" className="pagination-number" aria-label="Page 8">
        8
      </a>
      <a href="#url" className="pagination-number" aria-label="Page 9">
        9
      </a>
      <a href="#url" className="pagination-number" aria-label="Page 10">
        10
      </a>

      <a className="next-page" rel="next" href="#url" aria-label="Next Page">
        Next
      </a>
    </nav>
  )
}
