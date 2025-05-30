import TextBox from "./TextBox";

function Features() {
  return (
    <section className="site-block-margin">
      <TextBox styles="mt-15">
        <TextBox.title styles="text-[1.8rem]">Features</TextBox.title>
        <TextBox.text>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </TextBox.text>
      </TextBox>
      <ul className=" features">
        <li className="active">Simple Bookmarking</li>
        <li>Speedy Searching</li>
        <li> Easy Sharing</li>
      </ul>
      <div className="wrapper py-10">
        <figure className="preview-2">
          <img
            src="/images/illustration-features-tab-1.svg"
            alt="blurred preview of the functionality"
          />
        </figure>
      </div>
      <TextBox styles="mt-15">
        <TextBox.title styles="text-[1.8rem] ">
          Bookmark in one click
        </TextBox.title>
        <TextBox.text>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </TextBox.text>
      </TextBox>
    </section>
  );
}

export default Features;
