import navyWatch from "@/imgs/navy.png";
import mintWatch from "@/imgs/mint.png";
import oceanWatch from "@/imgs/ocean.png";
import ProductWithColor from "@/components/altColors/ProductWithColor";
function ListOfProductsWColors() {
  return (
    <div className="flex gap-6 mt-14">
      <ProductWithColor
        watchColor={mintWatch}
        altText="Watch in mint green color"
        bgColor="bg-green-200"
      />
      <ProductWithColor
        watchColor={navyWatch}
        altText="Watch in navy blue color"
        bgColor="bg-blue-900"
      />
      <ProductWithColor
        watchColor={oceanWatch}
        altText="Watch in ocean blue color"
        bgColor="bg-white"
      />
    </div>
  );
}

export default ListOfProductsWColors;
