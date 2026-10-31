
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
}

// Use one consistent canonical domain
const SITE_URL = "https://www.evanoo.in";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

export default function SEO({
                                title,
                                description,
                                image = DEFAULT_IMAGE,
                                url,
                                keywords,
                            }: SEOProps) {

    // Exclude query parameters and URL fragments
    const { pathname } = useLocation();

    const canonicalUrl = url || `${SITE_URL}${pathname}`;

    const fullTitle = title.includes("Evanoo")
        ? title
        : `${title} | Evanoo`;

    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{fullTitle}</title>

            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />

            {keywords && (
                <meta name="keywords" content={keywords} />
            )}

            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Evanoo" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={canonicalUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

        </Helmet>
    );
}
