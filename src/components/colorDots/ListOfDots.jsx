import ColorDot from "./ColorDot";

function ListOfDots() {
  return (
    <div className="flex flex-col gap-5">
      <ColorDot color="bg-blue-900" />
      <ColorDot color="bg-green-200" />
      <ColorDot color="bg-white" />
    </div>
  );
}

export default ListOfDots;
