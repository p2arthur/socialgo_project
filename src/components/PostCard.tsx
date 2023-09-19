import { postInterface } from "../interfaces/post-interface";
import { BiLike, BiDonateHeart, BiComment } from "react-icons/bi";

const PostCard = (post: postInterface) => {
  return (
    <div key={post.postId}>
      <div className="bg-gray-950 p-5 border border-transparent hover:border-gray-900 hover:scale-101 transition-all cursor-pointer">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
              <div className="w-12 border-2 border-cyan-500 h-12 rounded-full bg-gray-900 hover:scale-110 transition-all duration-75"></div>
              <h3 className="text-gray-200 text-xl font-semibold">
                {post.creator}
              </h3>
            </div>
            <p className="text-gray-400 text-sm md:text-lg">{post.content}</p>
            <ul className="flex gap-5">
              <li className="w-20 hover:scale-125 transition-all h-20 md:w-28 md:h-28 bg-gray-900 rounded"></li>
              <li className="w-20 h-20 md:w-28 md:h-28 hover:scale-125 transition-all bg-gray-900 rounded"></li>
              <li className="w-20 h-20 md:w-28 md:h-28 hover:scale-125 transition-all bg-gray-900 rounded"></li>
            </ul>
          </div>

          <div className="w-full flex items-center justify-between lg:justify-end gap-10 px-5">
            <div className="text-gray-100 flex flex-col items-center">
              <div className="group transition-all rounded-full bg-transparent hover:bg-gray-100 p-1">
                <BiLike className="text-gray-100 transition-all group-hover:text-gray-950 text-xl" />
              </div>
              <p>{post.interactions.likes}</p>
            </div>

            <div className="text-gray-100 flex flex-col items-center">
              <div className="group transition-all rounded-full bg-transparent hover:bg-gray-100 p-1">
                <BiDonateHeart className="text-gray-100 transition-all group-hover:text-gray-950 text-xl" />
              </div>

              <p>{post.interactions.donations}</p>
            </div>

            <div className="text-gray-100 flex flex-col items-center">
              <div className="group transition-all rounded-full bg-transparent hover:bg-gray-100 p-1">
                <BiComment className="text-gray-100 transition-all group-hover:text-gray-950 text-xl" />
              </div>
              <p>{post.interactions.comments.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
