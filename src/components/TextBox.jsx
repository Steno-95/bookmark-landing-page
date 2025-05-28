function TextBox({ children, styles = "" }) {
  return <article className={`text-box ${styles}`}>{children}</article>;
}

function Title({ children, styles = "" }) {
  return <h2 className={`${styles}`}>{children}</h2>;
}

function Text({ children, styles = "" }) {
  return <p className={`${styles}`}>{children}</p>;
}

TextBox.title = Title;
TextBox.text = Text;

export default TextBox;
