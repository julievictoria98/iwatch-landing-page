import { IoIosSearch } from "react-icons/io";
import { SlBag } from "react-icons/sl";

function SerachAndBasket() {
  return (
    <div className="flex gap-8">
      <IoIosSearch color="white" size={25} />
      <SlBag color="white" size={25} />
    </div>
  );
}

export default SerachAndBasket;
