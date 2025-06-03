import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

function MobileNav({ onClick }) {
  return (
    <aside className="p-8 fixed bg-(--accent-color)/95 min-h-screen w-full top-0 left-0 z-20 flex flex-col justify-between">
      <nav className="flex flex-col gap-15">
        <figure className="flex justify-between">
          <Logo circle="#fff" icon="hsl(229, 31%, 21%)" />
          <button
            type="button"
            aria-label="mobile menu button"
            onClick={onClick}
            className="w-fit border-none p-0"
          >
            <img
              src="/images/icon-close.svg"
              alt="close button"
              className="size-5"
            />
          </button>
        </figure>
        <ul className=" uppercase text-white/70 w-full text-center text-[1.5rem]">
          <li className="mobile-link">
            <a href="#features">features</a>
          </li>
          <li className="mobile-link">
            <a>pricing</a>
          </li>
          <li className="mobile-link">
            <a>contact</a>
          </li>
          <li className="mobile-link">
            <button
              type="button"
              className="border-2 border-white rounded-md text-[1.5rem] uppercase w-full py-3 mt-4 text-white font-medium tracking-[.2em]"
            >
              login
            </button>
          </li>
        </ul>
      </nav>
      <ul className="flex gap-15 items-center justify-center">
        <SocialLinks />
      </ul>
    </aside>
  );
}

export default MobileNav;
