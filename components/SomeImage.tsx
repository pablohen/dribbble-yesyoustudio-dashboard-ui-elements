import React from 'react';

interface Props {
  selectedImage: StaticImageData;
}

const SomeImage = ({ selectedImage }: Props) => {
  return (
    <div className="p-2">
      <div
        className="p-2 w-full rounded-2xl h-[22rem] shadow-sm"
        style={{
          background: `url('${
            selectedImage.src ?? selectedImage.blurDataURL
          }') no-repeat center bottom`,
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
};

export default SomeImage;
