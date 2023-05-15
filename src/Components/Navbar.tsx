import { GiSkills } from "react-icons/gi";
import { Routes } from "../Data/Routes";
import Button from "./UI/Inputs/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className={`fixed w-full h-[70px] top-0 left-0 z-[10000] items-center bg-theme text-theme duration-500 shadow-lg `}
    >
      <div className="container flex flex-row justify-between items-center h-full">
        <Link to={"/"} className="flex items-center gap-2 text-2xl">
          <span className="hidden md:block">SkillsForge</span>
          <GiSkills size={35} className="text-theme" />
        </Link>

        <div
          className={`flex items-center justify-center gap-8 md:gap-6 lg:gap-8`}
        >
          {Routes.map((elem, index) => {
            return (
              <Link
                key={index}
                to={elem.href}
                className={`duration-300 cursor-pointer`}
                title={elem.title}
              >
                <span className="hidden md:block lg:block">{elem.title}</span>
                <span>
                  {
                    <elem.icon
                      size={22}
                      className="lg:hidden md:hidden block"
                    />
                  }
                </span>
              </Link>
            );
          })}

          <Link to={"/discover"}>
            <Button
              title="Get started"
              // eslint-disable-next-line react/style-prop-object
              style="text-[11px] p-2 hidden md:block"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
