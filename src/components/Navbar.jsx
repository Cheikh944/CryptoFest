import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="min-w-[100px]  bg-violet flex flex-col items-center border-r-[1px]">
      <img className=" mt-[20px] w-[42px] h-[46px]" src={logo} alt="" />
      <ul className=" mt-[60px]">
        <Link to="/" className="nav-link-home">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-[20px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0028 14.62C13.2361 14.62 14.24 15.6154 14.24 16.8389V19.9857C14.24 20.2486 14.4511 20.4594 14.7215 20.4655H16.674C18.2126 20.4655 19.4634 19.2317 19.4634 17.7157V8.79095C19.4562 8.26921 19.2073 7.77817 18.7801 7.45183L12.0263 2.07287C11.1198 1.35574 9.85156 1.35574 8.9419 2.07491L2.2342 7.44979C1.79063 7.78635 1.54171 8.2774 1.53659 8.80834V17.7157C1.53659 19.2317 2.78737 20.4655 4.326 20.4655H6.29693C6.57454 20.4655 6.7999 20.2455 6.7999 19.9755C6.7999 19.9161 6.80707 19.8568 6.81937 19.8005V16.8389C6.81937 15.6226 7.81712 14.6282 9.04127 14.62H12.0028ZM16.674 22H14.7031C13.5742 21.9734 12.7035 21.0885 12.7035 19.9857V16.8389C12.7035 16.4614 12.389 16.1545 12.0028 16.1545H9.04639C8.66839 16.1566 8.35595 16.4645 8.35595 16.8389V19.9755C8.35595 20.0522 8.34571 20.1259 8.3242 20.1954C8.21356 21.2082 7.34693 22 6.29693 22H4.326C1.94019 22 0 20.0778 0 17.7157V8.80118C0.0102439 7.78431 0.479415 6.85337 1.28971 6.24059L7.9841 0.874926C9.45819 -0.291301 11.5121 -0.291301 12.9831 0.87288L19.7257 6.24366C20.5175 6.84621 20.9867 7.7751 21 8.77969V17.7157C21 20.0778 19.0598 22 16.674 22Z"
              fill="#8D8598"
            />
          </svg>
        </Link>
        <Link to="/products?Id=bitcoin" className="nav-link-home">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.14749 4.20344C8.58049 4.54344 8.82949 5.05044 8.82949 5.59444C8.82949 9.97944 8.97749 11.1594 9.58249 11.6084C9.97949 11.9014 10.5235 11.8984 12.3565 11.8474C13.2085 11.8224 14.2995 11.7904 15.7285 11.7904C16.2985 11.7904 16.8355 12.0344 17.1995 12.4594C17.5375 12.8544 17.6855 13.3704 17.6075 13.8784C16.9395 18.2034 13.2595 21.3444 8.85749 21.3444C3.97349 21.3444 0.000488281 17.3714 0.000488281 12.4884C0.000488281 8.61644 2.92849 4.74444 6.52749 3.85844C7.08949 3.72144 7.69349 3.84944 8.14749 4.20344ZM6.98249 5.30344C6.95049 5.30344 6.91849 5.30744 6.88649 5.31544C3.91649 6.04644 1.50049 9.26444 1.50049 12.4884C1.50049 16.5444 4.80049 19.8444 8.85749 19.8444C12.5145 19.8444 15.5705 17.2394 16.1245 13.6494C16.1285 13.6194 16.1425 13.5324 16.0605 13.4354C15.9825 13.3444 15.8585 13.2904 15.7285 13.2904C14.3175 13.2904 13.2405 13.3224 12.3995 13.3464C10.3635 13.4074 9.52149 13.4304 8.68949 12.8134C7.4998 11.9321 7.34338 10.4504 7.33046 6.29248L7.32949 5.59444C7.32949 5.51044 7.29349 5.44044 7.22149 5.38444C7.15449 5.33144 7.06949 5.30344 6.98249 5.30344ZM18.0509 2.73374C19.8089 4.49074 20.9249 6.79974 20.8929 8.61674C20.8809 9.32574 20.3659 9.91774 19.6699 10.0227C18.3119 10.2277 16.7219 10.2897 15.3149 10.2897C14.0049 10.2897 12.8519 10.2367 12.1889 10.1987C11.3549 10.1497 10.6909 9.48474 10.6429 8.65074C10.5649 7.32874 10.3959 3.96974 10.5159 1.37174C10.5489 0.616742 11.1589 0.0157416 11.9049 0.00274156C14.0419 -0.0592584 16.2469 0.932742 18.0509 2.73374ZM12.0329 1.50174H12.0109C11.9009 4.02074 12.0639 7.27474 12.1399 8.56374C12.1439 8.64074 12.1999 8.69674 12.2759 8.70074C13.3039 8.75974 16.8459 8.92374 19.3929 8.54874C19.3989 7.14474 18.4379 5.24074 16.9909 3.79474C15.5069 2.31274 13.7509 1.50174 12.0329 1.50174Z"
              fill="#8D8598"
            />
          </svg>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
