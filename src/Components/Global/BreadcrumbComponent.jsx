import { Link, useLocation } from "react-router-dom";

function BreadcrumbComponent() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  return (
    <section className="breadcrumbContainer d-flex align-items-center">
      <p className="m-0 ms-5">
        <Link to="/" className="routePageLink linkActive">Izo Decor Glass</Link>
        {pathParts.map((item, index) => {
          const isLast = index === pathParts.length - 1;
          const displayName = decodeURIComponent(item)
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

          return (
            <span key={index}>
              <span> / </span>
              {isLast ? (
                <span className="currentBreadcrumb">{displayName}</span>
              ) : (
                <Link
                  to={`/${pathParts.slice(0, index + 1).join("/")}`}
                  className="routePageLink linkActive"
                >
                  {displayName}
                </Link>
              )}
            </span>
          );
        })}
      </p>
    </section>
  )
}


export default BreadcrumbComponent