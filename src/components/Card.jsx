function Card({ children, styles = "" }) {
  return <article className={`card ${styles}`}>{children}</article>;
}

function CardImage({ src, styles = "" }) {
  return (
    <figure className={`${styles}`}>
      <img src={`/images/logo-${src}.svg`} alt={`icon of ${src}`} />
    </figure>
  );
}

function CardDivider() {
  return (
    <figure className="w-[125%]">
      <img src="/images/bg-dots.svg" alt="a line of separated dots" />
    </figure>
  );
}

function CardBtn() {
  return <button className="btn-main w-full">Add & Install Extension</button>;
}

Card.image = CardImage;
Card.divider = CardDivider;
Card.btn = CardBtn;
export default Card;
