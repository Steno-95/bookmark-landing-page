import TextBox from "./TextBox";

function Newsletter() {
  return (
    <section className="p-10 bg-(--primary-blue) " id="contact">
      <div className="text-center md:max-w-[35rem] md:mx-auto flex flex-col items-center">
        <TextBox styles="text-white p-5 max-w-[30rem]">
          <TextBox.text styles="uppercase tracking-[.2em] text-sm">
            35.000+ already joined{" "}
          </TextBox.text>
          <TextBox.title styles="text-white text-[1.5rem]">
            Stay up-to-date with what we're doing
          </TextBox.title>
        </TextBox>
        <form className="flex flex-col items-center justify-center gap-5 md:flex-row">
          <label htmlFor="email" className="opacity-0 md:absolute -z-10">
            Enter your email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            autoComplete="email"
            className="email-field"
          />
          <button type="button" className="action-btn">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
