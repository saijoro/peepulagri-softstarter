import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Input } from "../ui/input";
import { useNavigate } from "@tanstack/react-router";

export interface ISearchFilters {
  searchString: string;
  setSearchString: Dispatch<SetStateAction<string>>;
  title?: string;
  className?: string;
}

const SearchFilter: React.FC<ISearchFilters> = ({
  searchString,
  setSearchString,
  title,
}) => {
  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const trimmedValue = value.replace(/\s+/g, " ");
    setSearchString(trimmedValue);
  };

   return (
    <div className="relative w-52">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent text-black rounded-none w-[25px] h-[25px] p-1" />
      <Input
        placeholder={title}
        value={searchString}
        onChange={handleInputChange} 
        className="px-8 bg-gray-100 hover:bg-opacity-50 transition-all ease-in-out border w-full h-fit placeholder:text-black text-black focus:outline-none focus-visible:outline-none rounded-none !focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus:ring-none text-xs 3xl:text-sm font-normal"
      />
      {searchString && (
        <button
          onClick={() => setSearchString("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-transparent text-base text-black"
        >
          X
        </button>
      )}
    </div>
  );
};

export default SearchFilter;