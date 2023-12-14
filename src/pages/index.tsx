import {Route, Routes} from "react-router-dom";
import {PostsPage} from "./posts";
import {PostPage} from "./post";

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/post/:postId" element={<PostPage />} />
    </Routes>
  );
};