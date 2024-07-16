import { useTranslation } from "react-i18next";
import { Button } from "@/components/atoms/button";
import Link from "next/link";
import { useState } from "react";

const menus = [
  {
    title: "casino",
    text: "licensed_games",
    image: {
      src: "/sections/casino.png",
      width: "132px",
      height: "119px",
      mt: "-100px",
    },
    href: "/",
  },
  {
    title: "1xsport",
    text: "most_popular_bookmaker",
    image: {
      src: "/sections/1x-sports.png",
      width: "94px",
      height: "94px",
    },
    href: "/xb-sport",
  },
  {
    title: "xsport",
    text: "new_modern_bookmaker",
    image: {
      src: "/sections/x-sports.png",
      width: "124px",
      height: "101px",
    },
    href: "/bc-sport",
  },
  {
    title: "poker",
    text: "famous_poker_room",
    image: {
      src: "/sections/poker.png",
      width: "103px",
      height: "99px",
    },
    href: "/#POKER",
  },
];

export function BetsMenu({ isForMobile }) {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      {/* DESKTOP */}
      <div
        className={`lg:${isForMobile ? "hidden" : "grid"} 
        md:${isForMobile ? "hidden" : "grid"} hidden gap-5 grid-cols-4`}
      >
        {menus.map((section, i) => (
          <div
            key={section.title}
            className="rounded-xl text-center px-6 pb-8 flex flex-col"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #3346acff 0%, #300c50ff 100%)",
              boxShadow:
                "inset 0px 4px 4px 0px #3a52d0, 0px 4px 30px 0px #2c1d5a",
            }}
          >
            <img
              src={section.image.src}
              alt={section.text}
              className="m-auto"
              style={{
                width: section.image.width,
                height: section.image.height,
                marginTop: i === 0 ? "-40px" : "-20px",
              }}
            />
            <p className="mt-2 font-bold text-lg">{t(section.title)}</p>
            <p className="mt-3 mb-7 text-xs h-[64px] text-textGrey">
              {t(section.text)}
            </p>
            <Button size="sm">{t("play")}</Button>
          </div>
        ))}
      </div>
      {/* MOBILE FIXED */}
      <div className="lg:hidden md:hidden grid grid-cols-5 fixed bottom-0 w-full left-0 bg-[#000c24] z-10">
        {menus.map((section, i) => (
          <Link
            href={section.href}
            className="flex items-center"
            key={section.title}
          >
            <div
              className="p-3 w-full"
              onClick={() => setActive(i)}
              style={
                i === active
                  ? {
                      background: "url(/menu-bg.svg)",
                    }
                  : {}
              }
            >
              <img
                src={section.image.src}
                alt={section.text}
                className="m-auto w-10 h-10 object-cover"
              />
              <p className="font-bold text-[10px] text-center mt-1">
                {t(section.title)}
              </p>
            </div>
            <div
              className="w-[1px] h-[80%]"
              style={{
                background:
                  "linear-gradient(rgba(91, 32, 120, 0.4), #501E6F, rgba(91, 32, 120, 0.2)",
              }}
            ></div>
          </Link>
        ))}
        <Link
          href="/menu"
          onClick={() => setActive(4)}
          style={
            4 === active
              ? {
                  background: "url(/menu-bg.svg)",
                }
              : {}
          }
        >
          <div className="flex items-center">
            <div className="p-3 w-full">
              <img
                src="/sections/menu.svg"
                alt="Menu"
                className="m-auto w-[32px] object-cover mt-3 mb-3"
              />
              <p className="font-bold text-[10px] text-center mt-3">
                {t("menu")}
              </p>
            </div>
            <div
              className="w-[1px] h-[80%]"
              style={{
                background:
                  "linear-gradient(rgba(91, 32, 120, 0.4), #501E6F, rgba(91, 32, 120, 0.2)",
              }}
            ></div>
          </div>
        </Link>
      </div>
    </>
  );
}
