function Footer() {
  return (
    <footer className="bg-(--accent-color) flex flex-col items-center justify-center gap-8 py-10">
      <figure>
        <img
          src="/images/logo-bookmark-footer.svg"
          alt="bookmark site logo"
          className="mask-"
        />
      </figure>
      <ul className="flex flex-col gap-5 text-(--main-bg) uppercase text-[1rem] font-light items-center tracking-[0.2em]">
        <li>features</li>
        <li>pricing</li>
        <li>contact</li>
      </ul>
      <ul className="flex gap-10">
        <li>
          <img
            src="/images/icon-facebook.svg"
            alt="facebook logo"
            className="size-5"
          />
        </li>
        <li>
          <img
            src="/images/icon-twitter.svg"
            alt="twitter logo"
            className="size-5"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
