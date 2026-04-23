"use client"

import type React from "react"
import { MeshGradient } from "@paper-design/shaders-react"

interface ShaderBackgroundProps {
  children: React.ReactNode
  colors?: readonly string[]
  wireframeColors?: readonly string[]
  className?: string
}

export function ShaderBackground({
  children,
  colors = ["#000000", "#8b5cf6", "#ffffff", "#1e1b4b", "#4c1d95"],
  wireframeColors = ["#000000", "#ffffff", "#8b5cf6", "#000000"],
  className = "min-h-[650px] w-full relative overflow-hidden bg-black",
}: ShaderBackgroundProps) {
  return (
    <div className={className}>
      <svg className="absolute inset-0 w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={[...colors]}
        speed={0.3}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-50 mix-blend-screen"
        colors={[...wireframeColors]}
        speed={0.2}
        distortion={0.9}
        swirl={0.7}
      />

      {children}
    </div>
  )
}
