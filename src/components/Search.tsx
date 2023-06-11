import clsx from "clsx";

import search from "../assets/Vector (35).svg";

const Search = ({ className }: { className?: string }) => {
  return (
    <label
      className={clsx(
        "flex items-center border rounded-lg w-2/6 text-[#626262] capitalize text-center gap-2 p-1 my-4",
        className
      )}
    >
      <img src={search} alt="" className="flex" />
      <input placeholder="Search Chatter" />
    </label>
  );
};

export default Search;
