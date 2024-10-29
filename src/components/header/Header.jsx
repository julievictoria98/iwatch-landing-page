import { FaApple } from "react-icons/fa";
import ListOfSubPages from "./ListOfSubPages";
function Nav() {
  return (
    <div className="flex justify-between">
      <FaApple size={50} color="white" />
      <ListOfSubPages />
    </div>
  );
}

export default Nav;
