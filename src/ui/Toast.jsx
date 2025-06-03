import { useEffect } from "react";

function Toast({ setIsSuccess }) {
  useEffect(() => {
    function timer() {
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }

    timer();
    return () => clearTimeout(timer);
  });
  return (
    <article
      className="fixed top-0 md:top-10 left-1/2 -translate-x-1/2 bg-green-500 md:w-1/4 md:h-1/3 flex flex-col items-center justify-center md:rounded-xl md:text-2xl w-full"
      aria-live="assertive"
    >
      <span className="text-center p-10 text-white">
        🎉 Thank you for subscribing to our newsletter! 🎉
      </span>
    </article>
  );
}

export default Toast;
