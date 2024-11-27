import { Link, useLocation } from "react-router-dom";

function BreadcrumbComponent() {
    const location = useLocation();
    const pathParts = location.pathname.split("/").filter(Boolean);
  return (
    <section className="breadcrumbContainer d-flex align-items-center">
        <p className="m-0 ms-5">
            <Link to={"/"} className="routePageLink">Home</Link>
           { pathParts.map((item, index) => (
            <span key={index}>
            
                <span> / </span>
                <Link to={`/${pathParts.slice(0, index + 1).join("/")}`} className="routePageLink linkActive ">
                {(decodeURIComponent(item)
                .replace(/([A-Z])/g, ' $&')
                .replace(/^./, (match) => match.toUpperCase())
                )}
                </Link>
            </span>
                
            ))}
        </p>
    </section>
  )
}


export default BreadcrumbComponent