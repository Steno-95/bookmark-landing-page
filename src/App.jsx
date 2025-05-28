import Card from "./components/Card";
import TextBox from "./components/TextBox";

function App() {
  return (
    <main className="site-padding">
      <header className="header ">
        <nav className="navigation">
          <figure>
            <img src="/images/logo-bookmark.svg" alt="bookmark site logo" />
          </figure>
          <button type="button" aria-label="mobile menu button">
            <img src="/images/icon-hamburger.svg" alt="hamburger icon" />
          </button>
        </nav>
        <section className="hero ">
          <div className="wrapper">
            <figure className="preview-1">
              <img
                src="/images/illustration-hero.svg"
                alt="blurred preview of the extension"
              />
            </figure>
          </div>
          <article className="flex flex-col gap-8">
            <h1 className="text-3xl">A Simple Bookmark Manager</h1>
            <p className="text-(--text-color)">
              A clean and simple interface to organize your favourite website.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex gap-5 items-center justify-center md:justify-start">
              <button className="btn-main" type="button">
                Get it on Chrome
              </button>
              <button className="btn-secondary" type="button">
                Get it on Firefox
              </button>
            </div>
          </article>
        </section>
      </header>
      <section className="site-block-margin">
        <TextBox styles="mt-15">
          <TextBox.title>Features</TextBox.title>
          <TextBox.text>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
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
      <section className="site-block-margin flex flex-col gap-10">
        <TextBox styles="">
          <TextBox.title>Download the extension</TextBox.title>
          <TextBox.text>
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </TextBox.text>
        </TextBox>
        <Card>
          <Card.image src={"chrome"} />
          <TextBox>
            <TextBox.title>Add to Chrome</TextBox.title>
            <TextBox.text>Minimum version 62</TextBox.text>
          </TextBox>
          <Card.divider />
          <Card.btn />
        </Card>
        <Card>
          <Card.image src={"firefox"} />
          <TextBox>
            <TextBox.title>Add to Firefox</TextBox.title>
            <TextBox.text>Minimum version 55</TextBox.text>
          </TextBox>
          <Card.divider />
          <Card.btn />
        </Card>
        <Card>
          <Card.image src={"opera"} />
          <TextBox>
            <TextBox.title>Add to Opera</TextBox.title>
            <TextBox.text>Minimum version 46</TextBox.text>
          </TextBox>
          <Card.divider />
          <Card.btn />
        </Card>
      </section>
      <section>
        <TextBox>
          <TextBox.title styles="text-[2rem]">
            Frequently Asked Questions
          </TextBox.title>
          <TextBox.text>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </TextBox.text>
        </TextBox>
      </section>
    </main>
  );
}

export default App;

/*

  Features
  Pricing
  Contact
  Login

  More Info

  Intelligent search

  Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.

  More Info

  Share your bookmarks

  Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.

  More Info

  Download the extension

  We’ve got more browsers in the pipeline. Please do let us know if you’ve 
  got a favourite you’d like us to prioritize.

  Add to Chrome
  Minimum version 62
  Add & Install Extension

  Add to Firefox
  Minimum version 55
  Add & Install Extension

  Add to Opera
  Minimum version 46
  Add & Install Extension

  Frequently Asked Questions
  
  Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.

  <!-- Question 1 -->
  What is Bookmark?

  <!-- Answer 1 -->
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.

  <!-- Question 2 -->
  How can I request a new browser?

  <!-- Answer 2 -->
  Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.

  <!-- Question 3 -->
  Is there a mobile app?

  <!-- Answer 3 -->
  Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.

  <!-- Question 4 -->
  What about other Chromium browsers?

  <!-- Answer 4 -->
  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.

  More Info

  35,000+ already joined

  Stay up-to-date with what we’re doing

  Contact Us

  Features
  Pricing
  Contact
  
*/
