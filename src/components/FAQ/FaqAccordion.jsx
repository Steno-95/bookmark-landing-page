import Faqs from "./Faqs";
import TextBox from "../TextBox";

function FaqAccordion() {
  return (
    <section className="site-block-margin md:max-w-[40rem] md:mx-auto">
      <TextBox>
        <TextBox.title styles="text-[2rem]">
          Frequently Asked Questions
        </TextBox.title>
        <TextBox.text>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </TextBox.text>
      </TextBox>
      <Faqs>
        <Faqs.details>
          <Faqs.title>What is Bookmark?</Faqs.title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </Faqs.details>
        <Faqs.details>
          <Faqs.title>How can I request a new browser?</Faqs.title>
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
          ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
          aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
          Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </Faqs.details>
        <Faqs.details>
          <Faqs.title>Is there a mobile app?</Faqs.title>
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus
          vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
          quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex
          et ultricies bibendum.
        </Faqs.details>
        <Faqs.details>
          <Faqs.title>How can I request a new browser?</Faqs.title>
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
          mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque
          non ut velit.
        </Faqs.details>
      </Faqs>
      <button className="btn-main px-8 py-4">More Info</button>
    </section>
  );
}

export default FaqAccordion;
