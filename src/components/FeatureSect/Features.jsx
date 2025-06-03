import { useState } from "react";
import TextBox from "../TextBox";
import { content } from "../../constants/FeatureTabContent";
import FeatureTabs from "./FeatureTabs";
function Features() {
  const [activeTab, setActiveTab] = useState("1");

  function handleClick(e) {
    if (!e.target.dataset.active) return;
    if (activeTab !== e.target.dataset.active)
      setActiveTab(e.target.dataset.active);
  }
  return (
    <section className="site-block-margin " id="features">
      <TextBox styles="mt-15 lg:max-w-[48rem] mx-auto">
        <TextBox.title styles="text-[1.8rem]">Features</TextBox.title>
        <TextBox.text>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </TextBox.text>
      </TextBox>
      <ul className=" features" onClick={handleClick}>
        <li
          className={`hover:text-(--primary-red) focus-within:text-(--primary-red) ${
            activeTab === "1" && "active"
          }`}
          data-active="1"
        >
          <button
            className="border-none outline-none p-0"
            type="button"
            onKeyDown={(e) =>
              [" ", "Enter"].includes(e.key) && setActiveTab("1")
            }
          >
            Simple Bookmarking
          </button>
        </li>
        <li
          className={`hover:text-(--primary-red) focus-within:text-(--primary-red) ${
            activeTab === "2" && "active"
          }`}
          data-active="2"
        >
          <button
            className="border-none outline-none p-0"
            type="button"
            onKeyDown={(e) =>
              [" ", "Enter"].includes(e.key) && setActiveTab("2")
            }
          >
            Speedy Searching
          </button>
        </li>
        <li
          className={`hover:text-(--primary-red) focus-within:text-(--primary-red) ${
            activeTab === "3" && "active"
          }`}
          data-active="3"
        >
          <button
            className="border-none outline-none p-0"
            type="button"
            onKeyDown={(e) =>
              [" ", "Enter"].includes(e.key) && setActiveTab("3")
            }
          >
            Easy Sharing
          </button>
        </li>
      </ul>
      <FeatureTabs content={content[+activeTab - 1]} />
    </section>
  );
}

export default Features;
