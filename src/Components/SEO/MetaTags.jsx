import { Helmet } from 'react-helmet';
import { useMeta } from '../Hooks/useMeta';

function MetaTags() {
    const { title, description, keywords, canonicalUrl } = useMeta();
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name='robots' content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={ogImage} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Izo Decor Glass" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}

export default MetaTags