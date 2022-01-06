import * as React from 'react'

const Signature: React.FC = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full font-semibold text-indigo-500 md:text-2xl dark:text-aura-purple">
      {children}
    </div>
  )
}

export default Signature
