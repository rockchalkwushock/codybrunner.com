import * as React from 'react'

const Signature: React.FC = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full text-xl font-semibold text-indigo-500">
      {children}
    </div>
  )
}

export default Signature
