import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="flex place-content-center text-white font-primary font-semibold bg-footer p-1">
      <p>
        Made with <span className="text-error">❤</span> by Team Bhole
      </p>
    </footer>
  );
};

export default Footer;
