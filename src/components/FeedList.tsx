import { postInterface } from "../interfaces/post-interface";
import TextBox from "./TextBox";

const FeedList = ({ postList }: { postList: postInterface[] }) => {
  const renderedPosts = postList.map((post) => {
    return (
      <div key={post.postId}>
        <div className="bg-gray-950 rounded p-5 border border-transparent hover:border-gray-900 hover:scale-101 transition-all cursor-pointer">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <div className="w-12 border-2 border-cyan-500 h-12 rounded-full bg-gray-900 hover:scale-110 transition-all duration-75"></div>
              <h3 className="text-gray-200 text-xl font-semibold">
                {post.title}
              </h3>
            </div>
            <p className="text-gray-400 text-sm md:text-lg">{post.content}</p>
            <ul className="flex gap-5">
              <li className="w-20 hover:scale-125 transition-all h-20 md:w-28 md:h-28 bg-gray-900 rounded"></li>
              <li className="w-20 h-20 md:w-28 md:h-28 hover:scale-125 transition-all bg-gray-900 rounded"></li>
              <li className="w-20 h-20 md:w-28 md:h-28 hover:scale-125 transition-all bg-gray-900 rounded"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex gap-5 flex-col h-screen overflow-y-auto scroll px-2 bg-gray-900">
      <TextBox />
      <h2 className="text-xl font-semibold text-gray-100 ml-5">Your feed</h2>
      {renderedPosts}
    </div>
  );
};

export default FeedList;
