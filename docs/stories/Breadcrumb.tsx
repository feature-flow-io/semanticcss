export const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol>
        <li className="breadcrumb-item">
          <a href="#">Settings</a>
        </li>

        <li className="breadcrumb-item">
          <a href="#">Members</a>
        </li>

        <li className="breadcrumb-item breadcrumb-item--active">
          <span aria-current="page">New</span>
        </li>
      </ol>
    </nav>
  )
}
