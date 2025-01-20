'use client';

import { useEffect, useRef } from 'react';

export default function Giscus() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        const giscusAttributes = {
            "src": "https://giscus.app/client.js",
            "data-repo": "sachintha00/giscus-with-next-js",
            "data-repo-id": "R_kgDONsrbeQ",
            "data-category": "General",
            "data-category-id": "DIC_kwDONsrbec4CmK0S",
            "data-mapping": "pathname",
            "data-strict": "0",
            "data-reactions-enabled": "1",
            "data-emit-metadata": "0",
            "data-input-position": "bottom",
            "data-theme": "dark_protanopia",
            "data-lang": "en",
            "crossorigin": "anonymous",
        };

        Object.entries(giscusAttributes).forEach(([key, value]) => {
            script.setAttribute(key, value);
        });
        script.async = true;

        const container = containerRef.current;
        if (container) {
            container.innerHTML = '';
            container.appendChild(script);
        }

        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, []);

    return <div ref={containerRef} />;
}