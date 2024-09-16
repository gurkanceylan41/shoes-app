import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between p-4 md:p-5 lg:p-6 xl:p-8 bg-white-fa text-gray-dark rounded-xl md:rounded-2xl lg:rounded-[20px] xl:rounded-3xl mb-6 md:mb-10 lg:mb-14 xl:mb-20">
      {/*  */}
      <nav className="flex gap-10 items-center font-semibold max-lg:hidden ">
        <a>New Drops🔥</a>
        <a>Men</a>
        <a>Women</a>
      </nav>

      <button className="lg:hidden">
        <img src="/hamburger.svg" alt="" />
      </button>

      <Link to={"/"} className="w-[16%] max-w-[128px] max-h-8">
        <img src="Group.svg" />
      </Link>

      <div className="flex gap-5 lg:gap-10 items-center">
        {/*  */}
        <img
          className="size-4 md:size:5 lg:size-6 xl:size-7 max-lg:hidden "
          src="/Search.svg"
        />
        <img className="size-4 md:size:5 lg:size-6 xl:size-7" src="/User.svg" />
        <span className="bg-yellow size-5 xl:size-8 rounded-full grid place-items-center text-[14px] xl:text-[16px] font-semibold font-open">
          0
        </span>
      </div>
    </header>
  );
};

export default Header;
