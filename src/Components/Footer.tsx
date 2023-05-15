import React from "react";
import { GiIsland, GiSkills } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FooterData } from "../Data/FooterData";
import { Social } from "../Data/Social";
import FooterCard from "./UI/Cards/footerCard";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="relative container grid grid-cols-1 lg:grid-cols-2 mt-24 mb-12 p-6 gap-4 bg-theme text-theme shadow-lg ">
      <div className="flex flex-col gap-6">
        {FooterData.map((elem, index) => {
          return (
            <FooterCard
              key={index}
              label={elem.label}
              value={elem.value}
              Icon={elem.icon}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="max-w-[100px] max-h-[100px] flex flex-col gap-2 justify-center items-center">
          <GiSkills size={40} className="text-theme" />

          <h2 className="font-bold text-theme text-lg">Skillforge</h2>
        </div>

        <div className="flex flex-row gap-4 ">
          {Social.map((elem, index) => {
            return (
              <Link
                key={index}
                to={elem.href}
                target={"_blank"}
                rel={"noreferrer"}
                className="full-theme p-3 shadow-lg rounded-md border border-transparent duration-500 "
              >
                {<elem.icon size={19} />}
              </Link>
            );
          })}
        </div>
        <h2 className="text-[15px] mt-2 text-theme text-center">
          All Rights Reserved To Yousef R Abo Aisha © {date}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
