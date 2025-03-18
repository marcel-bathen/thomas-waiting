export const vertex = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

export const fragment = `
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
        
        // Calculate movement speed and normalize direction
        float moveSpeed = length(mouseDirection);
        float speedFactor = smoothstep(0.0, 0.06, moveSpeed) * 0.7;
        vec2 normalizedDirection = moveSpeed > 0.0 ? mouseDirection / moveSpeed : vec2(0.0);
        
        vec2 pixelToMouseDirection = centerOfPixel - adjustedMouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float strength = smoothstep(0.7, 0.0, pixelDistanceToMouse) * centerIntensity;
 
        vec2 uvOffset = strength * -mouseDirection * 0.25;
        vec2 uv = vUv - uvOffset;

        // Apply RGB split with higher base effect at edges
        float splitAmount = 0.008 * strength * u_aberrationIntensity * speedFactor * (0.7 + centerIntensity * 0.3);
        vec2 redOffset = normalizedDirection * splitAmount;
        vec2 blueOffset = -normalizedDirection * splitAmount;

        vec4 colorR = texture2D(u_texture, uv + redOffset);
        vec4 colorG = texture2D(u_texture, uv);
        vec4 colorB = texture2D(u_texture, uv + blueOffset);

        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
`;