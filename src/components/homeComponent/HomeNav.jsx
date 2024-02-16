import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const HomeNav = () => {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const handleSearch = () => {
    const idValue = idRef.current.value;
    navigate(`/products?Id=${idValue.toLowerCase()}`);
  };
  return (
    <nav className="flex justify-between h-[50px] w-[100%] px-[50px] items-center sm:px-[5px] sm:flex-col sm:items-center">
      <h4 className="font-semi text-second h-fit">Hello</h4>
      <ul>
        <input
          ref={idRef}
          className="h-[30px] border-[1px] text-[#000] font-medium pl-[20px] sm:w-[150px]"
          type="text"
        />
        <button className="h-[30px] px-[10px] bg-[#f13a3a]" onClick={handleSearch}>Search</button>
      </ul>
    </nav>
  );
}

export default HomeNav