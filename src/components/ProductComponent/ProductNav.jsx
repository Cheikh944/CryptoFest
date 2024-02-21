import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductNav = ({ list }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const coinId = searchParams.get("Id");
  let blurTimeout;
  const [valeurInput, setValeurInput] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearch = () => {
    navigate(`/products?Id=${valeurInput.toLowerCase()}`);
  };

  const handleBlur = () => {
    blurTimeout = setTimeout(() => {
      setIsInputFocused(false);
    }, 200);
  };
  const filteredList = list?.data.filter((coin) =>
    coin.name.toLowerCase().includes(valeurInput.toLowerCase())
  );

  return (
    <nav className="flex justify-between h-[50px] w-[100%] px-[50px] items-center sm:px-[5px] sm:flex-col sm:items-center">
      <h4 className="font-semi text-second h-fit">{coinId.toUpperCase()}</h4>
      <ul className="relative">
        <input
          value={valeurInput}
          onChange={(e) => setValeurInput(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={handleBlur}
          className="h-[30px] border-[1px] text-[#000] font-medium pl-[20px] sm:w-[150px]"
          type="text"
        />
        <button
          className="h-[30px] px-[10px] bg-[#f13a3a]"
          onClick={handleSearch}
        >
          Search
        </button>
        {isInputFocused && (
          <div className=" absolute bg-[#fff] w-[100%] max-h-[300px] z-10 overflow-y-auto">
            {filteredList &&
              filteredList.map((coin) => (
                <Link
                  to={`/products?Id=${coin.id}`}
                  key={coin.id}
                  className="flex items-center justify-between px-[20px] py-[5px] cursor-pointer hover:bg-[#74747448]"
                >
                  <img src={coin.image} className="w-[30px]" alt="" />
                  <li className="text-[#000]">{coin.name}</li>
                </Link>
              ))}
          </div>
        )}
      </ul>
    </nav>
  );
};

export default ProductNav;
