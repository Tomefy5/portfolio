"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { Group } from "three";

function Particles() {
    const ref = useRef<Group>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group ref={ref}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#050814]">
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/90 z-10 pointer-events-none" />

            <Canvas camera={{ position: [0, 0, 1] }}>
                <Particles />
            </Canvas>
        </div>
    );
}
