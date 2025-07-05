import { useLocation } from "react-router-dom";
import metaData from "../../Data/metaData";

export const useMeta = () => {
    const location = useLocation();

    const path = location.pathname;
    const baseUrl = "https://izodecorglass.com";

    const cleanPath = path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
    const canonicalUrl = `${baseUrl}${cleanPath}`;

    const meta = metaData[cleanPath] ;

    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        canonicalUrl: canonicalUrl
    }
    
}