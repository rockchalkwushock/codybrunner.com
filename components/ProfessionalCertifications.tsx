import * as React from 'react'

interface Props {
  certIds: Array<string>
}

const ProfessionalCertifications: React.FC<Props> = ({ certIds }) => {
  return (
    <div className="grid grid-cols-1 gap-2 justify-items-center md:grid-cols-3">
      {certIds.map(id => (
        <div
          data-iframe-height="270"
          data-iframe-width="160"
          data-share-badge-host="https://www.credly.com"
          data-share-badge-id={id}
          key={id}
        />
      ))}
    </div>
  )
}

export default ProfessionalCertifications
