import { FaApple } from "react-icons/fa";
import ListOfSubPages from "./ListOfSubPages";
import SerachAndBasket from "./SearchAndBasket";
function Nav() {
  return (
    <div className="flex justify-between items-center pl-4 pr-4 pt-4">
      <FaApple size={50} color="white" />
      <ListOfSubPages />
      <SerachAndBasket />
    </div>
  );
}

export default Nav;
