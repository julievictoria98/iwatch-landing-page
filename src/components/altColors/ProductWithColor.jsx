import Image from "next/image";
function ProductWithColor({ watchColor, altText, bgColor }) {
  return (
    <div className={`${bgColor} rounded-2xl pr-4 pl-4 w-32`}>
      <Image
        className="-mt-8"
        src={watchColor}
        alt={altText}
        width={500}
        height={500}
      />
    </div>
  );
}

export default ProductWithColor;
