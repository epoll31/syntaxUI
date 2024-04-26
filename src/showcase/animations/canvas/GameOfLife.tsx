'use client'

import { cn } from '@/lib/utils'
import React, { useCallback, useEffect, useRef, useState } from 'react'

// const cellSize: number = 15
// const borderSize: number = 1
// const intervalTime: number = 1000 // Interval time for the simulation updates

const getRandBoard = (
  width: number,
  height: number,
  cellSize: number,
): boolean[][] => {
  const cols = Math.floor(width / cellSize)
  const rows = Math.floor(height / cellSize)
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.random() > 0.5),
  )
}

interface GameOfLifeProps {
  className?: string
  backgroundColor?: string
  cellColor?: string
  borderColor?: string
  cellSize?: number
  borderSize?: number
  intervalTime?: number
}

const GameOfLife: React.FC<GameOfLifeProps> = ({
  className,
  backgroundColor = 'white',
  cellColor = 'black',
  cellSize = 15,
  borderSize = 0,
  borderColor = 'white',
  intervalTime = 1000,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [board, setBoard] = useState<boolean[][]>(() =>
    getRandBoard(window.innerWidth, window.innerHeight, cellSize),
  )

  useEffect(() => {
    setBoard(getRandBoard(window.innerWidth, window.innerHeight, cellSize))
  }, [cellSize, borderSize])

  const drawBoard = useCallback(
    (ctx: CanvasRenderingContext2D, board: boolean[][]) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillStyle = cellColor
      if (borderSize !== 0) {
        ctx.strokeStyle = borderColor
        ctx.lineWidth = borderSize
      } else {
        ctx.strokeStyle = 'transparent'
        ctx.lineWidth = 0
      }

      board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell) {
            const x = colIndex * cellSize
            const y = rowIndex * cellSize
            ctx.fillRect(x, y, cellSize, cellSize)
            ctx.strokeRect(x, y, cellSize, cellSize)
          }
        })
      })
    },
    [backgroundColor, borderColor, borderSize, cellColor, cellSize],
  )

  const updateBoard = useCallback(() => {
    setBoard((prevBoard) => {
      return prevBoard.map((row, i) =>
        row.map((cell, j) => {
          const numNeighbors = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
          ].reduce((acc, [x, y]) => {
            const newRow = i + x
            const newCol = j + y
            if (
              newRow >= 0 &&
              newRow < prevBoard.length &&
              newCol >= 0 &&
              newCol < row.length
            ) {
              acc += prevBoard[newRow][newCol] ? 1 : 0
            }
            return acc
          }, 0)

          return cell
            ? numNeighbors === 2 || numNeighbors === 3
            : numNeighbors === 3
        }),
      )
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    drawBoard(ctx, board)

    const interval = setInterval(updateBoard, intervalTime)

    return () => clearInterval(interval)
  }, [board, drawBoard, updateBoard])

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      if (!ctx) return
      drawBoard(ctx, board)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    return () => window.removeEventListener('resize', resizeCanvas)
  }, [drawBoard, board])

  return (
    <div
      className={cn('relative -z-20 h-full w-full overflow-hidden ', className)}
    >
      <canvas ref={canvasRef} className="h-full w-full ">
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      {/* <span className="absolute left-0 top-0 h-full w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-[3px]"></span> */}
      {/* bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0)] */}
    </div>
  )
}

export default GameOfLife
