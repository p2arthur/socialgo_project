import { postInterface } from "../interfaces/post-interface";
import TextBox from "./TextBox";

const FeedList = ({ postList }: { postList: postInterface[] }) => {
  const renderedPosts = postList.map((post) => {
    return (
      <div key={post.postId}>
        <div className="bg-gray-950 rounded p-5 border border-transparent hover:border-gray-900 hover:scale-101 transition-all cursor-pointer">
          <h3 className="text-gray-200">{post.title}</h3>
          <p className="text-gray-400">{post.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="flex gap-5 flex-col h-screen overflow-y-auto scroll px-2 bg-gray-900">
      <TextBox />
      {renderedPosts}
    </div>
  );
};

export default FeedList;
