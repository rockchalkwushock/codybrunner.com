import * as React from 'react'

const Giphy: React.FC<{ giphyId: string }> = ({ giphyId }) => {
  return (
    <div className="relative w-full h-32 mb-6 md:h-44">
      <iframe
        allowFullScreen
        className="absolute giphy-embed"
        height="100%"
        src={`https://giphy.com/embed/${giphyId}`}
        title={`Giphy Embed: ${giphyId}`}
        width="100%"
      />
    </div>
  )
}

export default Giphy
