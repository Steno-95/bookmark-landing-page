import TextBox from "../components/TextBox";
import useScreenSize from "../hooks/useScreenSize";

function Header({ isMobileOpen, onClick }) {
  const isMobile = useScreenSize();
  return (
    <header className="header ">
      <nav className="navigation">
        <figure>
          {!isMobileOpen && (
            <img
              src="/images/logo-bookmark.svg"
              alt="bookmark site logo"
              className="2xl:h-8 2xl:w-45"
            />
          )}
        </figure>
        {isMobile && !isMobileOpen && (
          <button
            type="button"
            aria-label="mobile menu button"
            onClick={onClick}
            className="border-0 -mr-2"
          >
            <img
              src="/images/icon-hamburger.svg"
              alt="hamburger icon"
              className="size-5"
            />
          </button>
        )}
        {!isMobile && (
          <ul className="flex gap-10 uppercase text-(--accent-color) items-center text-[1rem]">
            <li className="hover:text-(--primary-red) cursor-pointer">
              <a href="#features">features</a>
            </li>
            <li className="hover:text-(--primary-red) cursor-pointer">
              <a href="#">pricing</a>
            </li>
            <li className="hover:text-(--primary-red) cursor-pointer">
              <a href="#contact">contact</a>
            </li>
            <li>
              <button className="action-btn uppercase p-0 pt-2 pb-1 px-6">
                login
              </button>
            </li>
          </ul>
        )}
      </nav>
      <section className="hero ">
        <div className="wrapper md:basis-1/2">
          <figure className="preview-1">
            <img
              src="/images/illustration-hero.svg"
              alt="blurred preview of the extension"
              className="w-full"
            />
          </figure>
        </div>
        <TextBox styles="md:basis-1/2 lg:self-center ">
          <TextBox.title styles="text-3xl">
            A Simple Bookmark Manager
          </TextBox.title>
          <TextBox.text>
            A clean and simple interface to organize your favourite website.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </TextBox.text>
          <div className="flex gap-5 items-center justify-center md:justify-start">
            <button className="btn-main hover-btn" type="button">
              Get it on Chrome
            </button>
            <button className="btn-secondary" type="button">
              Get it on Firefox
            </button>
          </div>
        </TextBox>
      </section>
    </header>
  );
}

export default Header;
