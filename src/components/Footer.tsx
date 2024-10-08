import Link from "next/link";
import React from "react";

const Footer = () => {
  const contents = [
    {
      name: "About Us",
      href: "about",
    },
    {
      name: "Services",
      href: "services",
    },
    {
      name: "Process",
      href: "process",
    },
  ];

  return (
    <footer className="w-full bg-primary text-primary-foreground opacity-90 p-3 md:p-5">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img
          src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
          alt="logo-ct"
          className="w-10"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          {contents.map((content, idx) => (
            <li key={idx}>
              <Link
                href={`#${content.href}`}
                color="blue-gray"
                className="font-normal transition-colors hover:text-secondary-foreground focus:text-secondary-foreground"
              >
                {content.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-4 border-blue-gray-50" />
      <div color="blue-gray" className="text-center font-normal">
        &copy; 2023 Made with ❤️ by Morya Corp Services.
      </div>
    </footer>
  );
};

export default Footer;
