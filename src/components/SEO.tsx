import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string;
}

const SITE_URL = "https://evanoo.in";
// const SITE_NAME = "My Website";
// const DEFAULT_IMAGE = "/images/og-image.jpg";
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

export default function SEO({
    title,
    description,
    image = DEFAULT_IMAGE,
    url = window.location.href,
    keywords,
}: SEOProps) {
    const fullTitle = `${title} | ${SITE_URL}`;
    return (
        <Helmet>
            <title>{fullTitle}</title>

            <meta name="description" content={description} />

            {keywords && (
                <meta
                    name="keywords"
                    content={keywords}
                />
            )}

            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />

            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content={fullTitle}
            />

            <meta
                name="twitter:description"
                content={description}
            />

            <meta
                name="twitter:image"
                content={image}
            />

            <link rel="canonical" href={url} />
        </Helmet>
    );
}