"use client";

import { useEffect, useRef } from "react";

export function useBeep() {
    const sfx = useRef(null);

    useEffect(() => {
        sfx.current = new Audio("/victory.ogg");
    }, []);

    function beep() {
        if (!sfx.current) return;

        sfx.current.currentTime = 0;
        sfx.current.play().catch(() => {});
    }

    return beep;
}
