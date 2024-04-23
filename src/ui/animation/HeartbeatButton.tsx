import React from 'react'

const HeartbeatButton = ({
  onClick,
}: {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {
  return (
    <div>
      <button
        className="m-9 animate-buttonheartbeat rounded-md bg-red-500 px-6 py-1 text-sm font-semibold text-white"
        onClick={onClick}
      >
        Ansub
      </button>
    </div>
  )
}

export default HeartbeatButton
