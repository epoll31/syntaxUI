'use client'

import { cn } from '@/lib/utils'
import { FC, use, useEffect, useMemo, useRef } from 'react'

const Canvas = ({
  className,
  draw,
}: {
  className?: string
  draw?: (ctx: CanvasRenderingContext2D, width: number, height: number) => void
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasSize = useMemo(
    () => ({
      width: canvasRef.current?.width,
      height: canvasRef.current?.height,
    }),
    [canvasRef],
  )

  useEffect(() => {
    if (!draw) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = canvas.getBoundingClientRect()
    canvas.width = width
    canvas.height = height

    draw(ctx, width, height)
  }, [canvasRef, draw])

  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center',
        className,
      )}
    >
      <div className="relative w-full max-w-screen-lg overflow-hidden">
        <div className="pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-white"></div>
        <div className="pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-white"></div>
        <div className="pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-white"></div>
      </div>
      <canvas
        ref={canvasRef}
        className="absolute left-0  top-0 -z-20 h-full w-full"
        width={canvasSize.width}
        height={canvasSize.height}
      >
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
  )
}

export default Canvas
