import Card from "./Card";
import TextBox from "./TextBox";

function Downloads() {
  return (
    <section className="site-block-margin flex flex-col gap-10">
      <TextBox styles="">
        <TextBox.title styles="text-[1.8rem]">
          Download the extension
        </TextBox.title>
        <TextBox.text>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </TextBox.text>
      </TextBox>
      <Card>
        <Card.image src={"chrome"} />
        <TextBox styles="gap-2!">
          <TextBox.title styles="text-[1.5rem]">Add to Chrome</TextBox.title>
          <TextBox.text styles="text-[1rem]">Minimum version 62</TextBox.text>
        </TextBox>
        <Card.divider />
        <Card.btn />
      </Card>
      <Card>
        <Card.image src={"firefox"} />
        <TextBox styles="gap-2!">
          <TextBox.title styles="text-[1.5rem]">Add to Firefox</TextBox.title>
          <TextBox.text styles="text-[1rem]">Minimum version 55</TextBox.text>
        </TextBox>
        <Card.divider />
        <Card.btn />
      </Card>
      <Card>
        <Card.image src={"opera"} />
        <TextBox styles="gap-2!">
          <TextBox.title styles="text-[1.5rem]">Add to Opera</TextBox.title>
          <TextBox.text styles="text-[1rem]">Minimum version 46</TextBox.text>
        </TextBox>
        <Card.divider />
        <Card.btn />
      </Card>
    </section>
  );
}

export default Downloads;
