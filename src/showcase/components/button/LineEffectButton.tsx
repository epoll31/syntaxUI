'use client'
import { motion } from 'framer-motion'

const LineEffectButton = () => {
  return (
    <motion.button
      className="relative block overflow-hidden rounded-lg p-[2px]"
      whileTap={{ scale: 0.95 }}
      whileFocus={{ scale: 1.05 }}
    >
      <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_calc(var(--angle)+60deg)_at_calc(50%+var(--x))_50%,#fb3a5d_50%,#ffffff_98%,#fb3a5d_100%)]" />
      {/* <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_calc(var(--angle)+80deg)_at_var(--x)_15px,#fb3a5d_50%,#ffffff_98%,#fb3a5d_100%)]" /> */}

      {/* <span className="absolute inset-[-1000%] animate-[better-spin_2s_linear_infinite]" /> */}
      <span className="block h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-[calc(0.5rem-2px)] bg-red-500 px-4 py-1 text-sm font-semibold text-white backdrop-blur">
        Syntax UI
      </span>
    </motion.button>
  )
}

export default LineEffectButton

// 'use client';
// import { motion } from 'framer-motion'

// const buttonVariants = {
//   initial: { scale: 0.95 },
//   hover: { scale: 1.05 },
//   tap: { scale: 0.9 },
// }

// const line1Variants = {
//   hidden: {
//     pathOffset: 0.0,
//     pathLength: 0.1,
//   },
//   visible: {
//     pathOffset: 0.9,
//     pathLength: 0.1,
//     transition: {
//       duration: 5,
//       ease: 'linear',
//       repeat: Infinity,
//     },
//   },
// }
// export default function App() {
//   return (
//     <motion.button
//       style={{
//         width: '200px',
//         height: '50px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'transparent',
//         border: 'none',
//         cursor: 'pointer',
//         position: 'relative',
//         overflow: 'hidden',
//         padding: '2px',
//       }}
//       whileHover="hover"
//       whileTap="tap"
//       initial="initial"
//       animate="visible"
//     >
//       <motion.svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 200 50"
//         initial="hidden"
//         animate="visible"
//         className={'absolute left-0 top-0'}
//       >
//         <defs>
//           <linearGradient
//             id="buttonGradient"
//             x1="0%"
//             y1="50%"
//             x2="100%"
//             y2="50%"
//           >
//             <stop offset="0%" stopColor="#EF4444" />
//             <stop offset="100%" stopColor="#000000" />
//           </linearGradient>
//         </defs>
//         <motion.rect
//           width="196" // slightly smaller than the button to fit inside the padding
//           height="46" // same as width, accounting for padding
//           x="2" // offset to account for the stroke width
//           y="2"
//           fill="transparent"
//           // stroke="rgba(255, 0, 0, 0.8)" // red stroke
//           stroke="url(#buttonGradient)" // Apply the gradient here
//           strokeWidth="2"
//           variants={line1Variants}
//         />
//       </motion.svg>

//       <span
//         style={{
//           position: 'absolute',
//           zIndex: 1,
//           color: '#FFFFFF', // white color for the text
//           fontWeight: 'bold',
//           fontSize: '16px',
//           pointerEvents: 'none', // ensures clicks pass through to the button
//         }}
//       >
//         Syntax UI
//       </span>
//     </motion.button>
//   )
// }
