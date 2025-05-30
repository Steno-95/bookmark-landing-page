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
    <section className="site-block-margin ">
      <TextBox styles="mt-15">
        <TextBox.title styles="text-[1.8rem]">Features</TextBox.title>
        <TextBox.text>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </TextBox.text>
      </TextBox>
      <ul className=" features" onClick={handleClick}>
        <li className={`${activeTab === "1" && "active"}`} data-active="1">
          Simple Bookmarking
        </li>
        <li className={`${activeTab === "2" && "active"}`} data-active="2">
          Speedy Searching
        </li>
        <li className={`${activeTab === "3" && "active"}`} data-active="3">
          Easy Sharing
        </li>
      </ul>
      <FeatureTabs content={content[+activeTab - 1]} />
    </section>
  );
}

export default Features;
