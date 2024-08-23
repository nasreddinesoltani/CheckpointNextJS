import React from "react";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { title: "HomePage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
    { title: "SinglePost", path: "/blog/:id" },
  ];
  return (
    <div className=" flex justify-around mt-4">
      <div>Logo</div>
      <div className="flex justify-between gap-5">
        {links.map((el) => (
          <Link href={el.path} key={el.title}>
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
