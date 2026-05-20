"use client";

import { useRef, useEffect, useCallback } from "react";

export const useSfx = (src: string, volume = 0.04) => {
    const ref = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio(src);
        audio.preload = "auto";
        audio.volume = volume;
        ref.current = audio;
    }, [src, volume]);

    return useCallback(() => {
        const audio = ref.current;
        if (!audio) return;
        audio.currentTime = 0;
        audio.play().catch(() => {"ERROR WITH SFX"});
    }, []);
};