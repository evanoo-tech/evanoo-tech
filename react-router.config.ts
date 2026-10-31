import type { Config } from "@react-router/dev/config";

export default {
    appDirectory: "src",
    ssr: false,
    prerender: [
        "/",
        "/about",
        "/services",
        "/hosting",
        "/saas",
        "/finance",
        "/portfolio",
        "/contact",
    ],
} satisfies Config;