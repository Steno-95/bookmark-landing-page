import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="bg-(--accent-color) flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:justify-between md:px-10 lg:px-20 lg:py-5 ">
      <nav
        className="flex flex-col gap-8 md:flex-row md:items-center"
        aria-label="footer navigation"
      >
        <figure>
          <Logo />
        </figure>
        <ul className="flex flex-col gap-5 text-(--main-bg) uppercase text-[1rem] font-light items-center tracking-[0.2em] md:flex-row xl:text-[.8rem]">
          <li className="hover:text-(--primary-red)">
            <a href="#features">features</a>
          </li>
          <li className="hover:text-(--primary-red)">
            <a href="#">pricing</a>
          </li>
          <li className="hover:text-(--primary-red)">
            <a href="contact">contact</a>
          </li>
        </ul>
      </nav>
      <ul className="flex gap-10 items-center">
        <SocialLinks />
      </ul>
    </footer>
  );
}

export default Footer;
