import React from "react";
import { useState } from "react";
import { ReactComponent as Book } from "../assets/Vector (29).svg";
import { FaTimes, FaBars } from "react-icons/fa";
import { ReactComponent as Teams } from "../assets/Vector (30).svg";
import { ReactComponent as Drafts } from "../assets/Vector (31).svg";
import { ReactComponent as Analytics } from "../assets/Vector (32).svg";
import { ReactComponent as Trending } from "../assets/evaTrendingUpOutline2.svg";
import { ReactComponent as Account } from "../assets/Vector (33).svg";
import { ReactComponent as Bell } from "../assets/Vector (34).svg";
import { ReactComponent as Feed } from "../assets/Feed.svg";
import clsx from "clsx";
//import img from "../assets/unsplash_fHXpgMd_XhE.png";

type Sublink = {
  label: string;
  href: string;
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

type Link = {
  title: string;
  items: Sublink[];
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};

const links: Link[] = [
  {
    title: "Overview",
    items: [
      {
        label: "Feed",
        Icon: Feed,
        href: "#",
      },
      {
        label: "Bookmark",
        Icon: Book,
        href: "#",
      },
      {
        label: "Team blogs",
        Icon: Teams,
        href: "#",
      },
      {
        label: "Drafts",
        Icon: Drafts,
        href: "#",
      },
      {
        label: "Analytics",
        Icon: Analytics,
        href: "#",
      },
    ],
  },
  {
    title: "Trending tags",
    Icon: Trending,
    items: [
      {
        label: "Programming",
        href: "#",
      },
      {
        label: "Data Science",
        href: "#",
      },
      {
        label: "Technology",
        href: "#",
      },
      {
        label: "Machine Learning",
        href: "#",
      },
      {
        label: "Politics",
        href: "#",
      },
    ],
  },
  {
    title: "Personal",
    items: [
      {
        label: "Account",
        Icon: Account,
        href: "#",
      },
      {
        label: "Notification",
        Icon: Bell,
        href: "#",
      },
    ],
  },
];

const SideNav = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        className="cursor-pointer fixed top-10 left-5 z-20 pr-4 md:hidden"
      >
        {isSideNavOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      <nav
        className={clsx(
          "min-h-screen bg-white shadow md:shadow-none p-4 pl-14 w-50 flex flex-col z-10 fixed md:sticky top-0 left-0 transition-all",
          isSideNavOpen ? "left-0" : "-left-3/4"
        )}
      >
        <h1 className="text-3xl text-blue-500 font-bold ml-4 ">CHATTER</h1>
        <ul>
          {links.map(({ title, items, Icon }) => (
            <li key={title}>
              <h3 className="font-thin text-md p- mt-1 mr-10">{title}</h3>

              <ul className="text-[#626262] text-sm font-light flex flex-col">
                {items.map((item) => (
                  <li className="flex gap-2 p-2 my-1">
                    {item.Icon && <item.Icon />}
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <p className="text-red-500 capitalize">log out</p>
        </ul>
      </nav>
    </>
  );
};

export default SideNav;
