import React from 'react';

interface BlobProps {
  src: string,
  style?: string
}

const Blob: React.FC<BlobProps> = ({ src, style }) => {
  return (
    <img
      className={`absolute ${style}`}
      src={src}
      alt="Blob"
    />
  );
}

export default Blob;