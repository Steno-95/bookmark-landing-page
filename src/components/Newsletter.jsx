import TextBox from "./TextBox";

function Newsletter() {
  return (
    <section className="p-10 bg-(--primary-blue) text-center">
      <TextBox styles="text-white p-5">
        <TextBox.text styles="uppercase tracking-[.2em] text-sm">
          35.000+ already joined{" "}
        </TextBox.text>
        <TextBox.title styles="text-white text-[1.5rem]">
          Stay up-to-date with what we're doing
        </TextBox.title>
      </TextBox>
      <form className="flex flex-col items-center justify-center gap-5">
        <label className="opacity-0">Enter your email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="bg-white px-2 py-3 rounded-md w-full"
        />
        <button type="button" className="btn-main bg-(--primary-red) w-full">
          Contact Us
        </button>
      </form>
    </section>
  );
}

export default Newsletter;
