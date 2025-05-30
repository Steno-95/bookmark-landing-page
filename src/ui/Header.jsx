import TextBox from "../components/TextBox";

function Header() {
  return (
    <header className="header ">
      <nav className="navigation">
        <figure>
          <img src="/images/logo-bookmark.svg" alt="bookmark site logo" />
        </figure>
        <button type="button" aria-label="mobile menu button">
          <img src="/images/icon-hamburger.svg" alt="hamburger icon" />
        </button>
      </nav>
      <section className="hero ">
        <div className="wrapper">
          <figure className="preview-1">
            <img
              src="/images/illustration-hero.svg"
              alt="blurred preview of the extension"
            />
          </figure>
        </div>
        <TextBox>
          <TextBox.title styles="text-3xl">
            A Simple Bookmark Manager
          </TextBox.title>
          <TextBox.text>
            A clean and simple interface to organize your favourite website.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </TextBox.text>
          <div className="flex gap-5 items-center justify-center md:justify-start">
            <button className="btn-main" type="button">
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
