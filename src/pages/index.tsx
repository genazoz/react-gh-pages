import {Route, Routes} from "react-router-dom";
import {PostsPage} from "./posts";
import {PostPage} from "./post";

export const Root = () => {
  return (
    <Routes>
      <Route path="/react-gh-pages/" element={<PostsPage />} />
      <Route path="/react-gh-pages/post/:postId" element={<PostPage />} />
    </Routes>
  );
};