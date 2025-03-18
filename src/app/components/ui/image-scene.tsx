import React, {useRef, useEffect, useState} from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, useAspect } from "@react-three/drei";
import * as THREE from "three";

const vertex = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragment = `
    varying vec2 vUv;
    uniform sampler2D u_texture;    
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_aberrationIntensity;
    uniform float u_gridSize; // canvas width
    uniform float u_aspect;  // canvas aspect ratio

    float getDistanceFromCenter(vec2 point) {
        // Convert point to aspect-corrected space
        vec2 center = vec2(0.5 * u_aspect, 0.5);
        vec2 aspectPoint = point * vec2(u_aspect, 1.0);
        return length(aspectPoint - center) / length(center); // Normalize to 0-1 range
    }

    void main() {
        // Adjust UV grid based on aspect ratio to maintain square cells
        float gridSize = u_gridSize;
        vec2 aspectAdjustedUV = vUv * vec2(u_aspect, 1.0);
        vec2 gridUV = floor(aspectAdjustedUV * gridSize) / gridSize;
        vec2 centerOfPixel = gridUV + vec2(1.0/gridSize);
        
        // Calculate center-based intensity with higher base value
        float distanceFromCenter = getDistanceFromCenter(vUv);
        float centerIntensity = mix(0.4, 1.0, 1.0 - smoothstep(0.0, 0.8, distanceFromCenter));
        
        // Adjust mouse coordinates to match the aspect-adjusted space
        vec2 adjustedMouse = u_mouse * vec2(u_aspect, 1.0);
        vec2 adjustedPrevMouse = u_prevMouse * vec2(u_aspect, 1.0);
        vec2 mouseDirection = adjustedMouse - adjustedPrevMouse;
        
        // Calculate movement speed and normalize direction with speed dampening
        float moveSpeed = length(mouseDirection);
        float speedFactor = smoothstep(0.0, 0.06, moveSpeed) * 0.5;
        speedFactor = min(speedFactor, 0.3);
        vec2 normalizedDirection = moveSpeed > 0.0 ? mouseDirection / moveSpeed : vec2(0.0);
        
        vec2 pixelToMouseDirection = centerOfPixel - adjustedMouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(3.6, 0.0, pixelDistanceToMouse) * centerIntensity;
        strength = min(strength, 0.6);
 
        vec2 uvOffset = strength * -mouseDirection * 0.1;
        vec2 uv = vUv - uvOffset;

        // Apply RGB split with higher base effect at edges and speed dampening
        float splitAmount = 0.005 * strength * u_aberrationIntensity * speedFactor * (0.7 + centerIntensity * 0.3);
        splitAmount = min(splitAmount, 0.01);
        vec2 redOffset = normalizedDirection * splitAmount;
        vec2 blueOffset = -normalizedDirection * splitAmount;

        vec4 colorR = texture2D(u_texture, uv + redOffset);
        vec4 colorG = texture2D(u_texture, uv);
        vec4 colorB = texture2D(u_texture, uv + blueOffset);

        // Use the alpha channel from the original texture
        float alpha = colorG.a;
        
        // Only apply the effect if the pixel is not fully transparent
        vec3 finalColor = mix(
            vec3(colorR.r, colorG.g, colorB.b),
            vec3(colorG.rgb),
            step(0.99, alpha)
        );

        gl_FragColor = vec4(finalColor, alpha);
    }
`;


interface SceneProps {
    src: string;
    index: number;
}

const Model = ({src, index}:any) => {
    const container = document.getElementById(`imageContainer${index}`);
    const meshRef = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);
    const mousePositionRef = useRef({ x: 0.5, y: 0.5 });
    const prevPositionRef = useRef({ x: 0.5, y: 0.5 });
    const targetPositionRef = useRef({ x: 0.5, y: 0.5 });
    const aberrationIntensityRef = useRef(0);
    const easeFactorRef = useRef(0.03);
    const texture = useTexture(src);
    const { width, height } = texture.image;
    const { innerWidth, innerHeight } = window;
    const containerWidth = useRef(container?.getBoundingClientRect().width || window.innerWidth);
    const containerHeight = useRef(container?.getBoundingClientRect().height || window.innerHeight);

    const containerSizePercent = containerWidth.current / 100;
    const textureSizePercent = width / 100;
    const containerSizeGrid = containerSizePercent / 128;

    const gridSize = useRef((containerSizeGrid * textureSizePercent) * 1);

    // Update container dimensions and gridSize on resize
    useEffect(() => {
        const updateDimensions = () => {
            if (!container) return;

            const rect = container.getBoundingClientRect();
            containerWidth.current = rect.width;
            containerHeight.current = rect.height;

            // Recalculate gridSize
            const newContainerSizePercent = containerWidth.current / 100;
            const newTextureSizePercent = width / 100;
            const newContainerSizeGrid = newContainerSizePercent / 128;

            const newGridSize = (newContainerSizeGrid * newTextureSizePercent)  * 1;

            gridSize.current = newGridSize;

            // Update shader uniform if material exists
            if (materialRef.current) {
                materialRef.current.uniforms.u_gridSize.value = newGridSize;
            }
        };

        // Initial update
        updateDimensions();

        // Add resize listener
        window.addEventListener('resize', updateDimensions);

        // Cleanup
        return () => window.removeEventListener('resize', updateDimensions);
    }, [container]);

    const canvasAspect = containerWidth.current / containerHeight.current;
    const scaleAspect = width / height;

    const scaleMultiplier = canvasAspect > scaleAspect ? 1 + ( (canvasAspect - scaleAspect) / scaleAspect ) : 1;

    const scaleBase = 1;
    const scaleY = scaleBase;
    const scaleX = scaleBase * scaleAspect;

    const multiplier = 7.673289540257264 * scaleMultiplier;

    const scale = [(scaleX * multiplier),(scaleY * multiplier),1];

    const handlePointerMove = (event: THREE.Event) => {
        const { uv } = event as unknown as { uv: THREE.Vector2 };
        if (!uv) return;

        prevPositionRef.current = { ...targetPositionRef.current };
        targetPositionRef.current = { x: uv.x, y: uv.y };
        // Reduced maximum intensity
        aberrationIntensityRef.current = 0.8;
        easeFactorRef.current = 0.03; // Slower easing
    };

    const handlePointerEnter = (event: THREE.Event) => {
        const { uv } = event as unknown as { uv: THREE.Vector2 };
        if (!uv) return;

        mousePositionRef.current = { x: uv.x, y: uv.y };
        targetPositionRef.current = { x: uv.x, y: uv.y };
        prevPositionRef.current = { x: uv.x, y: uv.y };
        // Reduced initial effect
        aberrationIntensityRef.current = 0.2;
        easeFactorRef.current = 0.03;
    };

    const handlePointerLeave = () => {
        const lastPosition = { ...mousePositionRef.current };
        targetPositionRef.current = {
            x: lastPosition.x,
            y: lastPosition.y
        };
        easeFactorRef.current = 0.03;
        aberrationIntensityRef.current = 0.2;
    };

    useFrame(() => {
        if (!materialRef.current) return;

        // Update mouse position with easing
        mousePositionRef.current = {
            x: mousePositionRef.current.x + (targetPositionRef.current.x - mousePositionRef.current.x) * easeFactorRef.current,
            y: mousePositionRef.current.y + (targetPositionRef.current.y - mousePositionRef.current.y) * easeFactorRef.current
        };

        // Update previous position for trail effect
        prevPositionRef.current = {
            x: prevPositionRef.current.x + (mousePositionRef.current.x - prevPositionRef.current.x) * easeFactorRef.current,
            y: prevPositionRef.current.y + (mousePositionRef.current.y - prevPositionRef.current.y) * easeFactorRef.current
        };

        // Update shader uniforms
        materialRef.current.uniforms.u_mouse.value.set(
            mousePositionRef.current.x,
            mousePositionRef.current.y
        );
        materialRef.current.uniforms.u_prevMouse.value.set(
            prevPositionRef.current.x,
            prevPositionRef.current.y
        );

        // Slower fade for aberration effect
        aberrationIntensityRef.current = Math.max(0, aberrationIntensityRef.current - 0.01);
        materialRef.current.uniforms.u_aberrationIntensity.value = aberrationIntensityRef.current;
    });

    return (
        <mesh
            ref={meshRef}
            scale={scale}
            onPointerMove={handlePointerMove}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                ref={materialRef}
                uniforms={{
                    u_texture: { value: texture },
                    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
                    u_prevMouse: { value: new THREE.Vector2(0.5, 0.5) },
                    u_aberrationIntensity: { value: 0 },
                    u_gridSize: { value: gridSize.current },
                    u_aspect: { value: canvasAspect }
                }}
                vertexShader={vertex}
                fragmentShader={fragment}
                transparent
            />
        </mesh>
    );
}

export default function Scene({src, index}: SceneProps) {
    const canvas = useRef(null);

    return (
        <Canvas ref={canvas}>
            <Model src={src} index={index}/>
        </Canvas>
    )
};