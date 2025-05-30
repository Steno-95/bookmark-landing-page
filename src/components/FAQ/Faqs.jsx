function Faqs({ children }) {
  return <article className="mb-15">{children}</article>;
}

function Title({ children }) {
  return (
    <summary>
      {children}
      <span>
        {/* <img src="/images/icon-arrow.svg" alt="arrow icon" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className="svg"
        >
          <path strokeWidth="3" d="M1 1l8 8 8-8" fill="none" />
        </svg>
      </span>
    </summary>
  );
}

function Details({ children }) {
  return <details name="faqs">{children}</details>;
}

Faqs.title = Title;
Faqs.details = Details;
export default Faqs;
