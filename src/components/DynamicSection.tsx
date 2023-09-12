import React from "react";
import { contentSectionInterface } from "../interfaces/content-section-interface";
import Sidebar from "./Sidebar";
import FeedList from "./FeedList";
import { postInterface } from "../interfaces/post-interface";
import OptionsSection from "./OptionsSection";

const DynamicSection = ({ type }: contentSectionInterface) => {
  const posts = [
    {
      postId: "1434",
      title: "Post from first test",
      content: "First test using this tool",
      interactions: { likes: 32, comments: 12 },
    },
    {
      postId: "1434",
      title: "Post from first test",
      content: "First test using this tool",
      interactions: { likes: 32, comments: 12 },
    },
    {
      postId: "1434",
      title: "Post from first test",
      content: "First test using this tool",
      interactions: { likes: 32, comments: 12 },
    },
    {
      postId: "1534",
      title: "Post from first test",
      content: "First test using this tool",
      interactions: { likes: 32, comments: 12 },
    },
    {
      postId: "1634",
      title: "Post from first test",
      content: "First test using this tool",
      interactions: { likes: 32, comments: 12 },
    },
  ];

  const optionsList = [
    {
      type: "news",
      data: {
        title: "new post by coop",
        subtitle: "I created a new coin called coop coin",
        option: "no-option",
      },
    },
  ];

  const contentRenderer = () => {
    switch (type) {
      case "feed":
        return <FeedList postList={posts} />;
      case "config":
        return <OptionsSection options={optionsList} />;
    }
  };

  return (
    <div className="flex flex-col justify-between">{contentRenderer()}</div>
  );
};

export default DynamicSection;