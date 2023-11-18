'use client'
// import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";
import styles from "./Layout.module.css";

export default function TransitionLayout({ children }: any) {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");
    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (children !== displayChildren) setTransitionStage("fadeOut");
    }, [children, setDisplayChildren, displayChildren]);

    // const pathname = usePathname()
    // const searchParams = useSearchParams()

    // useEffect(() => {
    //     console.log('route change with dependency');
    //     setTransitionStage("fadeOut");
    // }, [pathname, searchParams]);

    return (
        <div
            onTransitionEnd={() => {
                if (transitionStage === "fadeOut") {
                    console.log("fading out");
                    setDisplayChildren(children);
                    setTransitionStage("fadeIn");
                }
            }}
            className={`${styles.content} ${styles[transitionStage]}`}
        >
            {displayChildren}
        </div>
    );
}
