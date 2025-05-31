import useScreenSize from "../../hooks/useScreenSize";
import TextBox from "../TextBox";

function FeatureTabs({ content }) {
  const isMobile = useScreenSize();
  return (
    <div className="md:flex md:gap-10 lg:gap-20">
      <div className="wrapper py-10 md:basis-1/2">
        <figure className="preview-2">
          <img
            src={`/images/${content.img}`}
            alt="blurred preview of the functionality"
          />
        </figure>
      </div>
      <TextBox styles="mt-15 md:text-start md:basis-1/2">
        <TextBox.title styles="text-[1.8rem] ">{content.title}</TextBox.title>
        <TextBox.text>{content.text}</TextBox.text>
        {!isMobile && <button className="btn-main">More Info</button>}
      </TextBox>
    </div>
  );
}

export default FeatureTabs;
