import Image from "next/image";
function ProductWithColor({ watchColor, altText, bgColor }) {
  return (
    <div className={bgColor}>
      <Image src={watchColor} alt={altText} width={500} height={500} />
    </div>
  );
}

export default ProductWithColor;
