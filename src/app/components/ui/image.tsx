"use client";

import React, { useRef } from "react";
import Scene from '@/app/components/ui/image-scene';


interface ImageProps {
    src: string;
    index: number;
    aspectWidth?: number,
    aspectHeight?: number,
    title?: string;
    alt?: string;
}

export default function image({src, index, aspectWidth, aspectHeight, title, alt}:ImageProps) {
    const aspectValue = `${typeof aspectWidth !== "undefined" ? aspectWidth : 4}/${typeof aspectHeight !== "undefined" ? aspectHeight : 3}`;
    return (
        <div style={{
            aspectRatio: aspectValue
        }} id={`imageContainer${index}`} className={`image-container`}>
            <Scene src={src} index={index} />
        </div>
    )
}