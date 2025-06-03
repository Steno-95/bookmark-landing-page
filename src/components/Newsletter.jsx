import { useState } from "react";
import TextBox from "./TextBox";

function Newsletter({ setIsSuccess }) {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  function handleValidation() {
    if (email.length === 0) return setIsValid(true);
    const valid = email.includes("@") && email.includes(".");
    if (!valid) setMessage("Whoops, make sure it's an email");
    setIsValid(valid);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) setIsSuccess(true);
    setEmail("");
  }

  return (
    <section className="p-10 bg-(--primary-blue) " id="contact">
      <div className="text-center md:max-w-[38rem] md:mx-auto flex flex-col items-center ">
        <TextBox styles="text-white p-5 max-w-[35rem]">
          <TextBox.text styles="uppercase tracking-[.2em] text-sm">
            35.000+ already joined{" "}
          </TextBox.text>
          <TextBox.title styles="text-white text-[1.5rem] px-8">
            Stay up-to-date with what we're doing
          </TextBox.title>
        </TextBox>
        <form
          className={`flex flex-col items-center justify-center gap-5 md:flex-row`}
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="opacity-0 md:absolute -z-10">
            Enter your email address
          </label>
          <div
            className={`flex flex-col rounded-xl ${
              !isValid ? "bg-(--primary-red)" : ""
            }`}
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              autoComplete="email"
              className="email-field invalid:border-(--primary-red) border-2 border-white w-full"
              value={email}
              onBlur={handleValidation}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!isValid && (
              <span className="text-white w-fit text-[.8rem] py-2 px-5 italic">
                {message}
              </span>
            )}
          </div>
          <button type="submit" className="action-btn self-start">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
