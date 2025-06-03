import Card from "./Card";
import TextBox from "./TextBox";

function Downloads() {
  return (
    <section className="site-block-margin flex flex-col gap-20">
      <TextBox styles="flex flex-col items-center justify-center">
        <TextBox.title styles="text-[1.8rem]">
          Download the extension
        </TextBox.title>
        <TextBox.text styles="lg:max-w-[52rem]">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </TextBox.text>
      </TextBox>
      <article className="flex flex-col gap-15 lg:flex-row lg:flex-wrap lg:gap-10 xl:gap-5">
        <Card styles="xl:-translate-y-10">
          <Card.image src={"chrome"} />
          <TextBox styles="gap-2!">
            <TextBox.title styles="text-[1.5rem]">Add to Chrome</TextBox.title>
            <TextBox.text>Minimum version 62</TextBox.text>
          </TextBox>
          <Card.divider />
          <Card.btn />
        </Card>
        <Card>
          <Card.image src={"firefox"} />
          <TextBox styles="gap-2!">
            <TextBox.title styles="text-[1.5rem]">Add to Firefox</TextBox.title>
            <TextBox.text>Minimum version 55</TextBox.text>
          </TextBox>
          <Card.divider />
          <Card.btn />
        </Card>
        <Card styles="xl:translate-y-10">
          <Card.image src={"opera"} />
          <TextBox styles="gap-2!">
            <TextBox.title styles="text-[1.5rem]">Add to Opera</TextBox.title>
            <TextBox.text>Minimum version 46</TextBox.text>
          </TextBox>
          <Card.divider />
          <Card.btn />
        </Card>
      </article>
    </section>
  );
}

export default Downloads;
