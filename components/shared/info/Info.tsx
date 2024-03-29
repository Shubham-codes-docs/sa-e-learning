import React from "react";
import Image from "next/image";

interface Props {
  image: string;
  text: string;
  isImage: boolean;
  extraClasses?: string;
  size?: number;
  fontStyles?: string;
}

const Info = ({
  image,
  text,
  isImage,
  extraClasses,
  size,
  fontStyles,
}: Props) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${extraClasses}`}>
      {" "}
      {isImage && <Image src={image} width={size} height={size} alt={text} />}
      <p className={`${fontStyles}`}>{text}</p>
    </div>
  );
};

export default Info;
