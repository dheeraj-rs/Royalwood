import { BsSearch } from "react-icons/bs";
function NavSearch() {
  return (
    <div className=" invisible w-max h-[60px] absolute right-0 top-[100px] flex items-center justify-center backdrop-blur-sm">
      <div className=" absolute top-[-60px] right-[30px] ">
        <BsSearch className="h-5 w-5 cursor-pointer" aria-hidden="true" />
      </div>
      <form
        className="flex gap-3 w-[100%] h-[100%] justify-center items-center"
        role="search"
      >
        <input
          className=" w-[100%] h-[80%] p-3 text-[#595959] outline-none backdrop-blur-sm bg-transparent shadow-md"
          type="search"
          placeholder="Search ..."
          aria-label="Search"
        />
        <button
          className=" w-[80px] h-[80%] bg-[#373737] text-white rounded-md text-[13px] shadow-md"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default NavSearch;
