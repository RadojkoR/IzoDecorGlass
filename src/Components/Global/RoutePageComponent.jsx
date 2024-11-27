import { Link, useLocation } from "react-router-dom";

function RoutePageComponent() {
    const location = useLocation();
    const pathParts = location.pathname.split("/").filter(Boolean);
    console.log((location.pathname));
    
    
        
    // Funkcija za formatiranje putanje
    // const formatPath = (path) => {
    //     // Dekodiranje URL enkodiranih karaktera, kao što je %C5%A1 za š
    //     path = decodeURIComponent(path);

    //     // Dodavanje razmaka pre svakog velikog slova, bez obzira na prethodno slovo
    //     // Ova funkcija dodaje razmak pre svakog velikog slova
    //     path = path.replace(/([A-Z])/g, ' $&');

    //     // Pretvaranje prvog slova u veliko
    //     path = path.charAt(0).toUpperCase() + path.slice(1);

    //     return path;
    // };
    
  return (
    <section className="routePageContainer d-flex align-items-center">
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


export default RoutePageComponent